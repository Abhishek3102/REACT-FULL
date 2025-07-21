import React, {useEffect, useCallback} from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Select } from '../index';
import appwriteService from '../../appwrite/config';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


// This component is a form for creating or editing a blog post.
// It uses the `useForm` hook from `react-hook-form` to manage form state
export default function PostForm({ post }) {
    // `useForm` is a custom hook that provides methods to handle form state and validation.
    // It returns an object with methods like `register`, `handleSubmit`, `watch`,  
    // `setValue`, and `control` which are used to manage the form inputs.
    // `register` is used to register input fields, `handleSubmit` is used to
    // handle form submission, `watch` is used to watch the value of a field,
    // `setValue` is used to set the value of a field programmatically, and
    // `control` is used to control the form state.
    // getValues is used to get the current values of the form fields.
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',
        },
    });

    const navigate = useNavigate();
    const userData = useSelector(state => state.user.userData);


    const submit = async (data) => {
        try {
            if (post) {
                let file = null;
                if (data.image && data.image[0]) {
                    file = await appwriteService.uploadFile(data.image[0]);
                    if (post.featuredImage) {
                        await appwriteService.deleteFile(post.featuredImage);
                    }
                }
                const dbPost = await appwriteService.updatePost(post.$id, {
                    ...data,
                    featuredImage: file ? file.$id : post.featuredImage,
                });
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            } else {
                let file = null;
                if (data.image && data.image[0]) {
                    file = await appwriteService.uploadFile(data.image[0]);
                }
                const dbPost = await appwriteService.createPost({
                    ...data,
                    featuredImage: file ? file.$id : undefined,
                    userId: userData.$id,
                });
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`); 
                }
            }
        } catch (error) {
            console.error('Error submitting post:', error);
        }
    };

    const slugTransform = useCallback((value) => {
        if(value && typeof value === "string"){
            
            // const slug = value.toLowerCase().replace(/ /g,'-')
            // setValue('slug', slug)
            // return slug

            // alternate way for above commented code
            return value.trim().toLowerCase().replace(/^[a-zA-Z\d\s]+/g, '-')
            .replace(/\s/g, '-')
        }
        return '';
    }, [])

    useEffect(() => {
        const subscription = watch((value, {name}) => {
            if(name === 'title'){
                setValue('slug', slugTransform(value.title,
                    {shouldValidate: true}
                ))
            }
        })

        return () => {
            subscription.unsubscribe() // this is done for optimization, better memory management
        }
    }, [watch, slugTransform, setValue])

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}
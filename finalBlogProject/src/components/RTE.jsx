import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'

/*This component is a Rich Text Editor (RTE) using TinyMCE.
It initializes the editor with a default value and sets up various plugins and toolbar options.
It allows users to format text, insert links and images, and perform other editing tasks.

It uses the `Controller` component from `react-hook-form` to manage the editor's state and integrate it with form validation.
The `control` prop is passed to the `Controller` to connect it with the form, 
and the `name` prop specifies the field name in the form data.
The `label` prop is used to display a label above the editor, and the `defaultValue` prop sets the initial content of the editor.
*/


export default function RTE({control, name, label, defaultValue = ""}) {
    return (
        <div className="w-full">
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
            <Controller name={name || "content"} // This is the name of the field in the form, when name is not given it defaults to "content"
            control={control}
            render={({field: {onChange}}) => (
                <Editor initialValue='default value'
    init={{branding: false,
        initialValue: defaultValue, // Set the initial value to the defaultValue prop 
        height: 500,
        menubar: true,
        plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
        ],
        toolbar: 
            'undo redo | styleselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | link image | \
            print preview media fullpage | forecolor backcolor emoticons | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
    }}
    
    onEditorChange={onChange} // This is the function that will be called when the content of the editor changes}
    />
            )}
            />
        </div>
    )
}
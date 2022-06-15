import React from 'react';
import { Typography, TextField } from '@material-ui/core'

interface EditableFieldProps {
    label: string;
    name?: string;
    value?: string;
    type?: string;
    style?: object;
    onChange: Function;
}

const EditableField = (props: EditableFieldProps) => {
    return <div style={{ width: '100%', padding: '10px' }}>
        <Typography variant="body1" style={{margin: '10px 0 3px 5px'}}>{props.label}</Typography>
        {props.type === 'multiline' ? (
            <TextField value={props.value} variant="outlined" onChange={(e) => props.onChange(props.name, e.target.value)} style={props.style} multiline />
        ) : (
            <TextField value={props.value} variant="outlined" onChange={(e) => props.onChange(props.name, e.target.value)} style={props.style} />
        )}
    </div>

}

export default EditableField;
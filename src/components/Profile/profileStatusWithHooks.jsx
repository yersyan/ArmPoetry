import React, {useEffect, useState} from "react";
import './profile.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let[status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true)
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return <div>
        {!editMode &&
        <div>
            <span onDoubleClick={activateEditMode }>{props.status || "No status"}</span>
        </div>
        }
        {editMode &&
        <div>
            <input onChange={onStatusChange} value={status} autoFocus={true} onBlur={deactivateEditMode}/>
        </div>
        }


    </div>

};

export default ProfileStatusWithHooks;
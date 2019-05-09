import * as React from "react";
import './loading.scss';


export const Loading = React.memo(() => {
    return <div className="loading">
    <div className="loading-center">
        <div className="loading-center-absolute">
            <div className="object object_one"></div>
            <div className="object object_two"></div>
            <div className="object object_three"></div>
        </div>
    </div>
</div>
})
import React from 'react';

const Button = ({ onclick, label, disable }) => {
    console.log('ss : ', disable);
    let classStyle = "btn btn-primary d-block my-3 ";
    classStyle += !disable ? "disabled" : null;
    return <button onClick={onclick} disabled={disable ? false : true} className={classStyle}>{label}</button >
        ;
}

Button.defaultProps = {
    disable: false
};

export default Button;


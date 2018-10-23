import React, {Component} from "react";


export const setPropsAsInitial = WrappedComponent => (
    class extends Component{
        render(){
            return <WrappedComponent { ...this.props} initialValues ={this.props} enableReinitialize />
        }
    }
);

/*
* Los componentes con initialValues se inicializan solo una vez, para corregir esto usamos enableReinitialize
* */
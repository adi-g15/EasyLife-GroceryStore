import React from "react"
import { connect } from "react-redux"

/**
 * @caution -> Don't actually show this page currently, there just isn't enough data to show
 */
function MePage() {
    return (
        <div>
            Username - {props.user.uname}
            Contact - {props.user.uname}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(MePage);

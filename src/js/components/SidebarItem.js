import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

class SidebarItem extends Component {
    constructor(props) {
        super(props);
    }

    __updateState (e) {
        e.stopPropagation();
        const { onStatusChange } = this.props;
        onStatusChange && onStatusChange();
    }

    render() {
        const { item, active, onEdit, onClick, onRemove } = this.props;
        const classNames = cx({
            'sidebar-item': true,
            'active': active,
        });
        const statusClassNames = cx({
            'status': true,
            'online': item.online,
        });
        return (<div className={ classNames } onClick={ onClick }>
                    <i className={ statusClassNames } onClick={ this.__updateState.bind(this) }></i>
                    <div className="content">
                        <p className="name">{ item.name }</p>
                        <p className="meta">
                            { !!item.url ? <i className={ "iconfont cloud" + (item.isSyncing ? " syncing" : "")}>&#xe604;</i> : null}
                            <span>{ item.count } Rules</span>
                        </p>
                    </div>
                    { onEdit ? <i className="iconfont edit" onClick={ onEdit }>&#xe603;</i> : null }
                    { onRemove ? <i className="iconfont delete" onClick={ onRemove }>&#xe608;</i> : null }
                </div>);
    }
}

SidebarItem.propTypes = {
    item: PropTypes.object,
    active: PropTypes.bool,
    onEdit: PropTypes.func,
    onClick: PropTypes.func,
    onRemove: PropTypes.func,
    onStatusChange: PropTypes.func,
};

export default SidebarItem;
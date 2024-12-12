import './Sidebar-admin.scss';
import { Link } from 'react-router-dom';
function SidebarAdmin() {
    return (
        <div className="sidebar-admin">
            <h2>AdMin</h2>
            <div className="sidebar-list">
                <ul>
                    <li>
                        <Link>Quản lý người dùng</Link>
                    </li>
                    <li>
                        <Link>Quản lý sản phẩm</Link>
                    </li>
                    <li>
                        <Link to="/admin/odermanagement">Quản lý đơn hàng</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SidebarAdmin;

import React, { Component, StyleSheet } from 'react';
import styles from '../Styles/Color'
class Menu extends Component {
    render() {
        return (
            <div><button style={styles.button}>
            Trang Chủ
        </button>
        <button style={styles.button}>
            Đăng Ký
        </button>
        <button style={styles.button}>
            Đăng Nhập
        </button>
        <button style={styles.button}>
            Liên Hệ
        </button>

            </div>
            
    );
    }
}

export default Menu;
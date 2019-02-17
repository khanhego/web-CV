import React, { Component } from 'react';
import Button from '../Components/Button '
import Image from '../Components/Image'
import styles from '../Styles/Color';
import Menu from '../Components/Menu';
import  '../Styles/color.css';
// import { StyleSheet, css } from 'aphrodite';
class Profile extends Component {
    render() {
        return (
            <div>
                <div> 
                     <td className ="heading" >
                      <text sytle ={{ fontSize:15}}>TRẦN KHÁNH</text>
                      {/* sytle ={styles.heading}>TRẦN KHÁNH </h>  */}
                      <Image></Image>
                       </td>
                    <td style ={styles.textbox}>
                    <text style={{fontSize: 10}}>Thông tin cá nhân</text>  
                        <p>Name </p>
                        <p>Birthday </p>
                        <p>Phone </p>
                        <p>Mail </p>
                        <p>Address </p>
                     
                     </td>
                </div>
                <div> 
                     <td style ={styles.headername}><h1>Mục Tiêu Nghề Nghiệp </h1></td>
                    <td> </td>
                </div>
                <div> 
                     <td style ={styles.headername}><h1>Kinh Nghiệm</h1></td>
                    <td></td>
                </div>
                <div> 
                     <td style ={styles.headername}><h1>Học Vấn</h1></td>
                    <td></td>
                </div>

            </div>






        );
    }
}

export default Profile;

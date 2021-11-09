import React from "react";
import { Icon } from '@iconify/react';

export default function Wpis(props){
    return (
        <div className="submitform">
                <a className="submittrashtitle">Submit <span className="yourtrashtitle">Your Trash</span></a>
                <div className ="messageform">
                    <br></br>
                    <br></br>
                    <a className="prerequisities">Before you fill this form, please make sure your trash is delivered to us at</a>
                    <br></br>
                    <a>Brawijaya University,  Jl. Veteran, Ketawanggede, Kec. Lowokwaru, Kota</a>
                    <br></br>
                    <a>Malang, Jawa Timur 65145</a>
                    <br></br>
                    <br></br>
                    <a>*Disclaimer : We only accept recycleable trash</a>
                </div>

                <form>
                <div className="leftform">
                    <label for="nameform">Name</label>
                    <br></br>
                    <input type="text" className="nameform" placeholder="Please enter your full name..."></input>
                    <br></br>
                    <label for="emailform">Email</label>
                    <br></br>
                    <input type="text" className="emailform" placeholder="Please enter your email that connect to this website...."></input>
                    <br></br>
                    <label for="senderform">Sender Address</label>
                    <br></br>
                    <input type="text" className="senderform" placeholder="Please enter your send address..."></input>
                    <br></br>
                    <a className="uploadtrashphoto">Upload Your Trash Photo</a>
                    <div className="camerabutton">
                        <Icon icon="codicon:device-camera" color="#312e81" className="cameraicon" />
                    </div>
                </div>
                <div className ="middleform">
                    <label for="trashform" className="manytrashtext">How Many Trash You Send</label>
                    <br></br>
                    <label for ="trashplastic" className="plastictext">Plastic : </label>
                    <input type="text" className="trashplastic" placeholder="in pcs..."></input>
                    <br></br>
                    <label for ="trashmetal" className="metaltext">Metal : </label>
                    <input type="text" className="trashmetal" placeholder="in pcs..."></input>
                    <br></br>
                    <label for ="trashpaper" className="papertext">Paper : </label>
                    <input type="text" className="trashpaper" placeholder="in grams..."></input>
                    <br></br>
                    <label for ="trashglass" className="glasstext">Glass : </label>
                    <input type="text" className="trashglass" placeholder="in pcs..."></input>
                </div>

                <div className="rightform">
                    <label for="phoneform">Phone</label>
                    <br></br>
                    <input type="text" className="phoneform" placeholder="Please enter your active phone number...."></input>
                    <br></br>
                    <label for="deliveryform">Delivery Date</label>
                    <br></br>
                    <input type="text" className="deliveryform" placeholder="Please enter your delivery date...."></input>
                    <br></br>
                    <label for="courierform">Delivery Courier</label>
                    <br></br>
                    <input type="text" className="courierform" placeholder="Please enter your delivery courier that you use...."></input>
                    <br></br>
                    <a className="deliveryreceipt">Upload your delivery receipt photo</a>
                    <div className="camerabutton">
                        <Icon icon="codicon:device-camera" color="#312e81" className="cameraicon"/>
                    </div>
                </div>
                </form>
                <div className="submitresetbtn">
                    <button type="submit" className="submitbtn"> <span>Submit</span></button>
                    <button type="reset" className="resetbtn"><span>Reset</span></button>
                </div>
            </div>
    );
}

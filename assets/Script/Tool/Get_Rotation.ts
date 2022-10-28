import {_decorator, Component, Node, Vec2, Vec3} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Get_Rotation')
export class Get_Rotation extends Component {
    public static Get_Rotation(vec : Vec2){
        return (vec.y<0 ?  - Math.acos(vec.x): Math.acos(vec.x))/Math.PI*180; 
    }
    public static Get_Rotation(vec : Vec3){
        return (vec.y<0 ? - Math.acos(vec.x): Math.acos(vec.x))/Math.PI*180;
    }
}


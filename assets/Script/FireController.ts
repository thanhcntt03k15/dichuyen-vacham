import {
    _decorator, Canvas,
    Component,
    EventMouse,
    EventTouch,
    Input,
    input,
    instantiate,
    KeyCode,
    Node,
    Prefab, RigidBody2D, Vec2,
    Vec3
} from 'cc';
import {Get_Rotation} from "./Tool/Get_Rotation";

const {ccclass, property} = _decorator;

@ccclass('FireController')
export class FireController extends Component {

    @property(Prefab)
    bullet: Prefab = null;

    @property(Node)
    fire_Point: Node = null;
    
    @property(Node)
    canvas: Node = null;


    onLoad() {
        input.on(Input.EventType.KEY_DOWN, this.OnKeyDown, this);
    }

    OnKeyDown(event: KeyboardEvent) {
        switch (event.keyCode) {
            case KeyCode.KEY_F:
                this.Fire();
                break;

        }
    }

    private Fire() {
        
        let bl = instantiate(this.bullet);

        bl.parent =this.canvas;

        bl.worldPosition= this.fire_Point.worldPosition;
     
        bl.eulerAngles = new Vec3(0, 0,Get_Rotation.Get_Rotation(this.node.right));
    }
}


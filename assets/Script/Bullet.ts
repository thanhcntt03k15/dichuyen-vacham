import {_decorator, Component, Node, RigidBody2D, Vec2} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Bullet')
export class Bullet extends Component {
    protected onLoad() {
        
    }

    protected start() {
        this.getComponent(RigidBody2D).linearVelocity = new Vec2(this.node.up.x * 500,this.node.up.y * 500);
    }
}


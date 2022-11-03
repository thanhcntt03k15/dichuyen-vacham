import {_decorator, Collider2D, Component, Contact2DType, IPhysics2DContact, Node, RigidBody2D, Vec2} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EnemyController')
export class EnemyController extends Component {
    protected start() {
        //this.getComponent(RigidBody2D).linearVelocity = new Vec2(this.node.up.x * 500,this.node.up.y * 500);
        let collider = this.getComponent(Collider2D);
        if (collider)
        {
            collider.on(Contact2DType.BEGIN_CONTACT, this.OnTriggerEnter, this);
        }
    }
    OnTriggerEnter(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null){
        console.log("OnTrigger");
        this.OffDesTroy(otherCollider);
        console.log("Log");
    }
    OffDesTroy(collider : Collider2D)
    {
        collider.node.destroy();
    }
}


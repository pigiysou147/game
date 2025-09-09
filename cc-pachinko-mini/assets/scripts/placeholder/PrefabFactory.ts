import { _decorator, Node, Color, instantiate, Prefab } from 'cc';
import { BlockRenderer } from './BlockRenderer';
import { LabelTag } from './LabelTag';
const { ccclass, property } = _decorator;

@ccclass('PrefabFactory')
export class PrefabFactory {
    static spawnBlockWithText(root: Node, prefab: Prefab | null, text: string, color: Color) {
        let node: Node;
        if (prefab) node = instantiate(prefab);
        else node = new Node('Block');
        root.addChild(node);
        const block = node.getComponent(BlockRenderer) || node.addComponent(BlockRenderer);
        block.setColor(color);
        const labelNode = new Node('Label');
        node.addChild(labelNode);
        const label = labelNode.addComponent(LabelTag);
        label.setText(text);
        return node;
    }
}


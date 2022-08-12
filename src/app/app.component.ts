import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-button-basic',
  templateUrl: './index.html',
  styleUrls: ['./index.less'],
})
export class NzDemoButtonBasicComponent {
  isShowMoveModal = true;
  moveFileName = '';
  selectedNodeKey = '';
  changeAfterNodesList = [];
  // nodes:any = [
  //   {
  //     title: '0-0',
  //     key: '0-0',
  //     children: [
  //       {
  //         title: '0-0-0',
  //         key: '0-0-0',
  //         children: [
  //           { title: '0-0-0-0', key: '0-0-0-0', isLeaf: true },
  //           { title: '0-0-0-1', key: '0-0-0-1', isLeaf: true },
  //           { title: '0-0-0-2', key: '0-0-0-2', isLeaf: true },
  //         ],
  //       },
  //       {
  //         title: '0-0-1',
  //         key: '0-0-1',
  //         children: [
  //           { title: '0-0-1-0', key: '0-0-1-0', isLeaf: true },
  //           { title: '0-0-1-1', key: '0-0-1-1', isLeaf: true },
  //           { title: '0-0-1-2', key: '0-0-1-2', isLeaf: true },
  //         ],
  //       },
  //       {
  //         title: '0-0-2',
  //         key: '0-0-2',
  //         isLeaf: true,
  //       },
  //     ],
  //   },
  //   {
  //     title: '0-1',
  //     key: '0-1',
  //     children: [
  //       { title: '0-1-0-0', key: '0-1-0-0', isLeaf: true },
  //       { title: '0-1-0-1', key: '0-1-0-1', isLeaf: true },
  //       { title: '0-1-0-2', key: '0-1-0-2', isLeaf: true },
  //     ],
  //   },
  //   {
  //     title: '0-2',
  //     key: '0-2',
  //     isLeaf: true,
  //   },
  // ];
  nodes: any = [
    {
      title: '0-0',
      key: '0-0',
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          children: [
            {
              title: '0-0-0-0',
              key: '0-0-0-0',
              isLeaf: true,
            },
            {
              title: '0-0-0-1',
              key: '0-0-0-1',
              isLeaf: true,
            },
            {
              title: '0-0-0-2',
              key: '0-0-0-2',
              isLeaf: true,
            },
          ],
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            {
              title: '0-0-1-0',
              key: '0-0-1-0',
              isLeaf: true,
            },
            {
              title: '0-0-1-1',
              key: '0-0-1-1',
              isLeaf: true,
            },
            {
              title: '0-0-1-2',
              key: '0-0-1-2',
              isLeaf: true,
            },
          ],
        },
        {
          title: '0-0-2',
          key: '0-0-2',
          isLeaf: true,
        },
      ],
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        {
          title: '0-1-0-0',
          key: '0-1-0-0',
          isLeaf: true,
        },
        {
          title: '0-1-0-1',
          key: '0-1-0-1',
          isLeaf: true,
        },
        {
          title: '0-1-0-2',
          key: '0-1-0-2',
          isLeaf: true,
        },
      ],
    },
    {
      title: '0-2',
      key: '0-2',
      isLeaf: true,
    },
  ];
  nzEvent(event) {
    console.log('event', event);
    //选中后
    if (event.node.isSelected) {
      this.selectedNodeKey = event.node.key;
    }

    console.log('selectedNodeKey', this.selectedNodeKey);
  }
  //确定新增文件
  confirmAddFile() {
    //如果没有key,就加在父级,有的话就push对应子级
    if (this.selectedNodeKey) {
      this.findTreeItem(this.selectedNodeKey, this.nodes);
      this.nodes = JSON.parse(JSON.stringify(this.changeAfterNodesList));
    } else {
      this.nodes.push(this.getChildNode());
      this.nodes = JSON.parse(JSON.stringify(this.nodes));
      console.log('111111', this.nodes);
    }
  }
  //基础子节点
  getChildNode() {
    return {
      title: `${this.moveFileName}`,
      key: '',
      isLeaf: true,
    };
  }
  findTreeItem(key, list) {
    list.forEach((item) => {
      if (item.key == key) {
        //当前节点是否存在子节点
        // if (item.children && Array.isArray(item.children)) {
        //   item.children.push(this.getChildNode());
        // } else {
        //   item.isLeaf = false;
        (item.children || (item.children = [])).push(this.getChildNode());
        // }
        this.changeAfterNodesList = list;
        console.log('结束后的节点', list);
        return list;
      } else if (item.children && item.children.length > 0) {
        this.findTreeItem(key, item.children);
      }
    });
  }
}

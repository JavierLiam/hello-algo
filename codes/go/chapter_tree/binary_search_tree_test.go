// File: binary_search_tree_test.go
// Created Time: 2022-11-26
// Author: Reanon (793584285@qq.com)

package chapter_tree

import (
	"fmt"
	"testing"
)

func TestBinarySearchTree(t *testing.T) {
	nums := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15}
	bst := NewBinarySearchTree(nums)
	fmt.Println("初始化的二叉树为:")
	bst.Print()

	// 获取根结点
	node := bst.GetRoot()
	fmt.Println("二叉树的根结点为:", node.Val)
	// 获取最小的结点
	node = bst.GetMin(bst.GetRoot())
	fmt.Println("二叉树的最小结点为:", node.Val)

	// 查找结点
	node = bst.Search(5)
	fmt.Println("查找到的结点对象为", node, "，结点值 =", node.Val)

	// 插入结点
	node = bst.Insert(16)
	fmt.Println("插入结点后 16 的二叉树为:")
	bst.Print()

	// 删除结点
	bst.Remove(1)
	fmt.Println("删除结点 1 后的二叉树为:")
	bst.Print()
	bst.Remove(2)
	fmt.Println("删除结点 2 后的二叉树为:")
	bst.Print()
	bst.Remove(4)
	fmt.Println("删除结点 4 后的二叉树为:")
	bst.Print()
}

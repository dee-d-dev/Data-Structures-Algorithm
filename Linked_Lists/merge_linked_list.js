var mergeTwoLists = function (list1, list2) {
  let head = {
    next: null,
  };

  let current = head;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      current = current.next;
      list1 = list1.next;
    } else {
      current.next = list2;
      current = current.next;
      list2 = list2.next;
    }
  }
  while (list1) {
    current.next = list1;
    current = current.next;
    list1 = list1.next;
  }
  while (list2) {
    current.next = list2;
    current = current.next;
    list2 = list2.next;
  }

  return head.next;
};

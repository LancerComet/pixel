describe("测试工具函数", function() {

  it("卷积函数运算", function() {
    expect(Convolution([1], [2])).toBe(2);
  });

  it("用于排序的辅助函数（升序）", function() {
    expect(ascendingOrder(3, 2)).toBe(1);
  });

  it("用于排序的辅助函数（降序）", function() {
    expect(descendingOrder(2, 3)).toBe(1);
  });

});

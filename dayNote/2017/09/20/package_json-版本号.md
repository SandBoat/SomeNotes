#package.json
## 版本号

- version 完全匹配
- >version 大于这个版本
- >=version大于或等于这个版本
- ~version 非常接近这个版本
- ^version 与当前版本兼容
- 1.2.x X代表任意数字，因此1.2.1, 1.2.3等都可以
- \* 任何版本都可以
- version1 - version2  等价于 >=version1 <=version2
- range1 || range2 满足任意一个即可
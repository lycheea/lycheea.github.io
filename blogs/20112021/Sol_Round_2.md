---
layout: default
title:  "Sol Round #2"
date:   2021-11-20 20:42:00 +0700
description: "Sol Round #2"
image: /assets/img/banner_bg/6.jpg
---

# Sol Round #2

{% raw %}

###### tags: `ctqh`

> Time Limit Exceed on test 4
>
> ~ The Grader


### [Đọc đề ở đây](https://ctqh.contest.codeforces.com/group/vXCcGCcyH7/contest/355152)


# Bài A

Đây là bài trick.

Bạn cần để ý rằng tổng từ $1 - n$ đến $n$ luôn bằng $n$.

Fun fact: đây là đề Round nào đó của Codeforces. Bạn ngồi làm $4$ tiếng không ra nhưng mà mọi người làm ra trong $30$ phút 🥲

# Bài B

Nhận xét:
$$
f(x) = (ax + b) ^ n = a_n x^n + a_{n-1} x^{n-1} + a_{n-2} x^{n-2} + ... + a_1 x + a_0
$$

Ta cần tính:
$$
A = a_n + a_{n-1} + a_{n-2} + ... + a_1 + a_0
$$

Ta nhận thấy $f(1) = A$. 

Vậy công việc của ta bây giờ là tính $f(1) = (a+b)^n$

Mà ta nhận thấy rằng $n$ rất lớn, lên tới $10^{18}$ nên để tránh bị TLE ta cần sử dụng hàm lũy thừa nhanh (đã có trong sol Round #1).

# Bài C

Đây là bài sử dụng cấu trúc dữ liệu DSU mà anh Nguyễn Đăng Tiến Thành đã viết rất rõ ràng trên [blog của anh](https://tienthanh214.github.io/competitive%20programming/disjoint-set-union/) nên mình sẽ không nhắc lại.

# Bài D

Cách làm bài này cực kỳ thực tế. Ta sẽ xem thời gian các vị khách đi thuê và trả phòng là các sự kiện.

Ta chia các sự kiện làm hai loại:
* Loại 1: sự kiện nhận phòng (chính là $l$ của mỗi input)
* Loại 2: sự kiện trả phòng (chính là $r$ của mỗi input)

Ta sẽ sắp xếp hai sự kiện trên theo trình tự thời gian. Nếu khách vào nhận phòng thì số phòng $+1$. Nếu khách trả phòng thì số phòng $-1$. Sau đó ta lấy max trên toàn bộ quá trình là xong.

# Bài E

Bài E bạn có thể đọc về thuật toán đệ quy liệt kê hoán vị trong cuốn Giải Thuật và Lập trình của thầy Lê Minh Hoàng.

Hoặc có thể sử dụng sẵn hàm next_permutation của C++

Code mẫu:
```cpp
#include <bits/stdc++.h>
 
using namespace std;
 
int main() {
    int n; cin >> n;
    vector<int> num(n); iota(num.begin(),num.end(),1);
 
    do{
        for(int i = 1; i <= n; i++) cout << num[i - 1] << " \n"[i==n];
    } while (next_permutation(num.begin(),num.end()));
}
```

# Bài F

Bài F bạn có thể đọc về thuật toán đệ quy liệt kê dãy nhị phân trong cuốn Giải Thuật và Lập trình của thầy Lê Minh Hoàng.

Hoặc có thể sử dụng bitmask (như thầy Thuận đã dạy) để làm.

Code mẫu:
```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
    int n; cin >> n;

    for(int state = 0; state < (1LL << n); state++) {
        for(int i = n - 1; i >= 0; i--) cout << ((state >> i) & 1);
        cout << endl;
    }
}
```

# Bài G

Tiếp tục là một bài dùng não.

Có một định lý về trung vị (cái này khỏi chứng minh tại vì chứng minh nó khá phức tạp) là để tối ưu chi phí thì ta sẽ chuyển tất cả phần tử của mảng về trung vị của mảng.

Nhắc lại một chút thì trung vị và phần tử nằm ở giữa mảng (khi mảng đã được) sắp xếp.

Thì bây giờ các bạn chỉ cần dùng hàm $sort$ để sắp xếp lại, rồi tìm chi phí để biến đổi tất cả về thằng trung vị.

# Bài H

Ta sẽ đổi đề lại một chút xíu.

Cho một thanh gỗ độ dài $n$. Đếm số cách để cắt thanh gỗ thành $3$ phần bằng nhau?

Vậy để cắt thanh gỗ thành $3$ phần bằng nhau thì ta cần $2$ nhát cắt, và có $n-1$ vị trí có thể cắt.

Bài toán bây giờ chỉ đơn giản là đếm số cách chọn $2$ vị trí cắt trong $n-1$ vị trí.

# Bài I

Bài này thì đòi hỏi các bạn phải vẽ ra giấy và quan sát một chút. Và khi quan sát một hồi bạn sẽ nhận ra là cái này chính là bất đẳng thức tam giác không chặt (ngồi vẽ ra và nhìn nhé chứ bạn không chứng minh đâu : D).

Tức là $A+B \geq C$ và $A+C \geq B$ và $B+C \geq A$.

# Bài J

Không hiểu vì sao mọi người lại không làm được bài này :face_with_one_eyebrow_raised:.

Để bảo gì thì làm nấy thôi.



> Đừng bao giờ rời bỏ giấc mơ của bạn. Hãy tiếp tục ngủ đi.
>
> ~ Lamter

{% endraw %}
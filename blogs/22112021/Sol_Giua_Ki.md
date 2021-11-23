---
layout: default
title:  "Sol Đề thi Giữa kỳ"
date:   2021-11-22 14:24:00 +0700
description: "Sol Đề thi Giữa kỳ"
image: /assets/img/banner_bg/3.jpg
---

# Sol đề thi giữa kỳ

###### tags: `CTQH`

> Time Limit Exceed on Test 4
> [name=The Grader]

### [Đọc đề và nộp bài ở đây](https://itctqh.contest.codeforces.com/group/TeXKq2oppE/contest/355781)

## CIRCHAR

Giả sử ta có chuỗi $s[1 \ldots n]$. Thì vòng tay tại vị trí $i$ chính là chuỗi $s[i \ldots n] + s[1 \ldots i-1]$. Lúc đó ta chỉ cần lấy $substr$ và in lần lượt hai xâu đã nói trên ra.

Hoặc có một cách khác là ta có thể tạo một sâu $f = s[1 \ldots n] + s[1 \ldots n]$. Lúc vòng tay tại vị trí $i$ chính là xâu $f[i \ldots i + n - 1]$.

##### Code mẫu của bạn LamTer:
```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
    freopen("circhar.inp","r",stdin);
    freopen("circhar.out","w",stdout);
    
	string s; cin >> s;
	int n = s.size();

	for(int i = 0; i < n; i++) s.push_back(s[i]);

	for(int i = 0; i < n; i++) {
		for(int j = 0; j < n; j++) cout << s[i + j];
		cout << "\n";
	}
}
```

## TONGSO

### Cách 1: Đề bảo sao code nấy

Thì code cẩn thận theo đề là sẽ được.

##### Code mẫu của bạn Nguyễn Bảo Khanh: 
```cpp
#include <bits/stdc++.h>
using namespace std;

int num[10001];
int main(){
    freopen("tongso.inp","r",stdin);
    freopen("tongso.out","w",stdout);

    int l,r;
    cin >> l >> r;
    
    //i là stt của phần tử hiện tại
    //a là biến đếm số phần tử giá trị b
    //b là giá trị hiện tại của phần tử
    for(int i=1,a=0,b=1;i<=r;i++,a++){
        //Nếu đã có a phần tử giá trị b
        //Thì tăng b lên 1
        //Số phần tử giá trị b bây giờ bằng 0
        if(a==b){
            a=0;b+=1;
        } 
        //Gán phần tử thứ i bằng b
        num[i]=b;
    }

    long long int ans=0;
    
    //Tính tổng từ l tới r
    for(int i=l;i<=r;i++) ans = ans + num[i];

    cout << ans;
}

```

### Cách 2: Công thức

Ta gọi hàm $f(i)$ là hàm tính tổng các phần tử từ $1$ đến $i$.

Vậy để tính tổng các phần tử từ $l$ đến $r$ thì ta chỉ cần lấy tổng các phần tử từ $1$ đến $r$ trừ tổng các phần tử từ $1$ đến $l-1$. Tức là $f(r) - f(l-1)$.

Ta nhận thấy:
$$
1^2 + 2^2 + 3^2 + 4^2 + \ldots +n^2 = \frac{n (n+1) (2n + 1)}{6}
$$

Ta nhận thấy $f(r)$ có dạng:
$$
f(r) = 1^2 + 2^2 + ... + k^2 + (k+1) + (k+1) + ... + (k+1)
\\
= 1^2 + 2^2 + ... + k^2 + m(k+1).
$$

Số phần tử $m \leq k + 1$.

Vậy nhiệm vụ của ta là tính ra $k$ và $m$.

##### Code mẫu của bạn LamTer:

```cpp
#include <bits/stdc++.h>

using namespace std;

long long int calc(long long int x) {
    if(x == 0) return 0LL;
    long long int up = sqrt(2 * x) + 3;
    while(up * (up + 1) >= 2 * x) up--;

    return up * (up + 1) * (2 * up + 1) / 6 + (x - up * (up + 1) / 2) * (up + 1);
}

int main() {
    freopen("tongso.inp","r",stdin);
    freopen("tongso.out","w",stdout);
    long long int a, b; cin >> a >> b;
    cout << calc(b) - calc(a - 1);
}
```



---


> Đừng bao giờ rời bỏ giấc mơ của mình. Hãy tiếp tục ngủ
> [name=LamTer]

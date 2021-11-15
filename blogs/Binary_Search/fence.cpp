#include <bits/stdc++.h>

using namespace std;

using lli = long long int;

const int N   = 1e4+7;
const lli INF = 1e11+7;

lli n,k;
lli num[N];

//Bước kiểm tra với chiều dài x
//Bạn đọc tự hiểu phần này
bool query(lli x) {
    lli res = 0;
    for(int i = 1; i <= n; i++) res += num[i] / x;
    return res >= k;
}

#define TASK "fence"

int main() {

    //Mở file
    if(fopen(TASK".inp", "r")) {
        freopen(TASK".inp", "r", stdin);
        freopen(TASK".out", "w", stdout);
    }

    cin >> n >> k;
    for(int i = 1; i <= n; i++) cin >> num[i], num[i] *= 100;
    //nhân num[i] lên 100 lần để tránh việc xử lý số chấm động

    //Giới hạn trên, giới hạn dưới và đáp án
    lli L = 1, R = INF, res = 0;

    while(L <= R) {
        //Lấy phần tử ở giữa
        lli mid = (L + R) >> 1;

        //Kiểm tra "lớn hơn", "bé hơn"
        if(query(mid)) L = mid + 1, res = mid; //Tăng giới hạn và cập nhật lại kết quả
        else R = mid - 1; //Giảm giới hạn
    }

    //Xuất ra đáp án. Phải chia cho 100 tại vì lúc nãy ta đã nhân cho 100
    cout << fixed << setprecision(2) << res/100.0;
}

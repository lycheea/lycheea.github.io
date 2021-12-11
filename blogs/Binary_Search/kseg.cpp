#include <bits/stdc++.h>

using namespace std;

using ii = pair<int,int>;

const int N = 1e3 + 7;

int n,k;
ii seq[N];

#define fi first
#define se second

bool query(int x) {
	int res = 0;

	for (int i = 1; i <= n; i++) {
		if (x < seq[i].fi) continue;
		if (x > seq[i].se) res += seq[i].se - seq[i].fi + 1;
		else res += x - seq[i].fi + 1;
	}

	return res >= k;
}

#define task "kseg"

int main() {

	if (fopen(task ".inp", "r")) {
        freopen(task ".inp", "r", stdin);
        freopen(task ".out", "w", stdout);
    }

	cin >> n >> k;
	for (int i = 1; i <= n; i++) cin >> seq[i].fi >> seq[i].se;

	int L = 0, R = 1e6 + 1, res = 1e6 + 1;
	while (L <= R) {
		int mid = (L + R) >> 1;
		if (query(mid)) R = mid - 1, res = mid;
		else L = mid + 1;
	}

	cout << res;
}

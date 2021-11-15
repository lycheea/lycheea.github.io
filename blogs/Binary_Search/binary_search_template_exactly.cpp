//Bạn cần code vào đây
//Trả về 0 nếu tìm đúng
//Trả về 1 nếu cần tăng giới hạn lên
//Trả về -1 nếu cần giảm giới hạn xuống
int query(int x) {
    //Bạn tự code tùy vào bài
}

int binary_searching() {
    //L là giới hạn dưới
    //R là giới hạn trên
    int L = -infinity, R = infinity;

    while(L <= R) {
        //Bước tìm ra thằng ở giữa
        int mid = (L + R) / 2;

        //q ở đây có hiểu là câu trả lời của Hiên
        int q = query(mid);

        //Nếu bạn đoán đúng
        if (q == 0) {
            return mid;
        }

        //Cập nhật lại giới hạn nếu đoán sai
        if(q == 1) L = mid + 1;
        else R = mid - 1;

    }
}

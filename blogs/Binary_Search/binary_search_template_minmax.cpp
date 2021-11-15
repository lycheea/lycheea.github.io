
//Để đơn giản thì đây sẽ là bài toán tìm max bằng chặt nhị phân

//Trả về true nếu vẫn có thể tăng giới hạn lên được
//Trả về false nếu ngược lại
bool query(int x) {
    //Code này bạn đọc tự code tùy vào bài
}

int binary_searching() {
    //L là giới hạn dưới
    //R là giới hạn trên
    //res là biến lưu đáp án
    int L = -infinity, R = infinity, res = -infinity;

    while(L <= R) {
        //Bước tìm ra thằng ở giữa
        int mid = (L + R) / 2;

        if( query(mid) ) L = mid + 1, res = mid; //Nếu có thể tăng giới hạn lên thì tăng giới hạn và cập nhật đáp án
        else R = mid - 1; //Nếu không thì giảm giới hạn xuống
    }

    //trả về kết quả
    return res;
}

---
layout: default
title:  "Tìm kiếm nhị phân (cơ bản)"
date:   2021-11-15 17:00:00 +0700
description: "C++"
image: /assets/img/banner_bg/19.jpg
---

# Tìm kiếm nhị phân
## Viết bởi: LamTer





### **Tìm kiếm nhị phân là gì?**

***Câu chuyện:*** vào một đêm không trăng không sao bạn Hiên tới nhà bạn Hưng và nói bạn Hưng rằng:

> Em đang nghĩ một số từ 1 đến 10. Đố anh có thể đoán được số em nghĩ mà chỉ cần dùng 4 lần đoán? Nếu đoán được em sẽ đồng ý làm vợ anh!!!

Cơ hội tốt như thế này thì chắc chắn Hưng không bỏ qua, tuy nhiên việc đoán đúng trong 4 lần là rất khó khi tỉ tệ chỉ là 4/10 = 40%. Do đó bạn Hưng đã đề nghị bạn Hiên rằng: với mỗi lần đoán bạn Hiên sẽ nói ra xem số bạn Hưng đoán là lớn hơn, bé hơn hay bằng với số mà bạn Hiên đoán. Bạn Hiên ngây thơ nên đã đồng ý.

Sau đó trò chơi giữa hai bạn diễn ra như sau:

> Hưng: anh đoán số 5
>
> Hiên: số của anh bé hơn số của em ó ^^
>
> Hưng: vậy thì anh đoán số 7
>
> Hiên: số của anh bé hơn số của em ó
>
> Hưng: vậy thì anh đoán số 9
>
> Hiên: số của anh lớn hơn số của em ó
>
> Hưng: vậy thì là số 8 thôi!!
>
> Hiên: Đúng gùiiii. Sao anh biết hay quá trời luôn <3
>
> Hưng: Gặp được em ở nơi này đúng là thiên ý...

Và sau đó là một màn phát cơm chó rất đặc sắc. Tuy nhiên ta bỏ qua vấn đề đó và cùng nhau phân tích sự khôn lỏi của Hưng trong tình huống này.

- Ban đầu thì số của Hiên là một số từ 1 đến 10.

- Trong lần đoán ban đầu thì Hưng đoán số nằm ở giữa 1 và 10 là số 5. Thì Hiên bảo là số Hưng bé hơn số Hiên từ đó thu hẹp khoảng cách đoán còn từ 6 đến 10

- Trong lần đoán thứ hai thì Hưng tiếp tục đoán số nằm giữa 6 và 10 là số 7. Thì Hiên bảo là số Hưng vẫn bé hơn số Hiên từ đó thu hẹp khoảng cách đoán còn từ 8 đến 10.

- Trong lần đoán thứ ba thì Hưng tiếp tục đoán số nằm giữa 8 và 10 là 9. Thì Hiên bảo số Hưng đã lớn hơn số Hiên rồi. Từ đây suy ra số đó chỉ có thể là số 8.

Và bằng cách thần kỳ trên thì Hưng đã đoán ra số Hiên mà chỉ cần 4 lần đoán. Tổng quát thì nếu như Hiên cho hưng n số để đoán thì Hưng chỉ cần dùng log2(n) lần đoán. Và đây cũng là tư tưởng của tìm kiếm nhị phân. Chia đôi tập ra để tìm kiếm.

(Còn tiếp...)


---
layout: default
title:  "Tìm kiếm nhị phân (cơ bản)"
date:   2021-11-15 17:00:00 +0700
description: "C++"
image: /assets/img/banner_bg/19.jpg
---

## Hành trình lấy vợ của Hưng và thuật toán tìm kiếm nhị phân

## Viết bởi: LamTer



{% raw %}

### Phần 1: Số của Hưng là số đỏ?

**Trong phần này chúng ta sẽ cùng tìm hiểu xem tìm kiếm nhị phân là gì**



***Câu chuyện 1:*** vào một đêm không trăng không sao bạn Hiên tới nhà bạn Hưng và nói bạn Hưng rằng:

> Em đang nghĩ một số từ $$1$$ đến $$10$$. Đố anh có thể đoán được số em nghĩ mà chỉ cần dùng $$4$$ lần đoán? Nếu đoán được em sẽ đồng ý làm vợ anh!!!

Cơ hội tốt như thế này thì chắc chắn Hưng không bỏ qua, tuy nhiên việc đoán đúng trong $$4$$ lần là rất khó khi tỉ tệ chỉ là $$4/10 = 40\%$$. Do đó bạn Hưng đã đề nghị bạn Hiên rằng: với mỗi lần đoán bạn Hiên sẽ nói ra xem số bạn Hưng đoán là lớn hơn, bé hơn hay bằng với số mà bạn Hiên đoán. Bạn Hiên ngây thơ nên đã đồng ý.

Sau đó trò chơi giữa hai bạn diễn ra như sau:

> Hưng: anh đoán số $$5$$
>
> Hiên: số của anh bé hơn số của em ó ^^
>
> Hưng: vậy thì anh đoán số $$7$$
>
> Hiên: số của anh bé hơn số của em ó
>
> Hưng: vậy thì anh đoán số $$9$$
>
> Hiên: số của anh lớn hơn số của em ó
>
> Hưng: vậy thì là số $$8$$ thôi!!
>
> Hiên: Đúng gùiiii. Sao anh biết hay quá trời luôn <3
>
> Hưng: Gặp được em ở nơi này đúng là thiên ý...

Và sau đó là một màn phát cơm chó rất đặc sắc. Tuy nhiên ta bỏ qua vấn đề đó và cùng nhau phân tích sự khôn lỏi của Hưng trong tình huống này.

- Ban đầu thì số của Hiên là một số từ $$1$$ đến $$10$$.

- Trong lần đoán ban đầu thì Hưng đoán số nằm ở giữa $$1$$ và $$10$$ là số $$5$$. Thì Hiên bảo là số Hưng bé hơn số Hiên từ đó thu hẹp khoảng cách đoán còn từ $$6$$ đến $$10$$.

- Trong lần đoán thứ hai thì Hưng tiếp tục đoán số nằm giữa $$6$$ và $$10$$ là số $$7$$. Thì Hiên bảo là số Hưng vẫn bé hơn số Hiên từ đó thu hẹp khoảng cách đoán còn từ $$8$$ đến $$10$$.

- Trong lần đoán thứ ba thì Hưng tiếp tục đoán số nằm giữa $$8$$ và $$10$$ là $$9$$. Thì Hiên bảo số Hưng đã lớn hơn số Hiên rồi. Từ đây suy ra số đó chỉ có thể là số $$8$$.

Và bằng cách thần kỳ trên thì Hưng đã đoán ra số Hiên mà chỉ cần $$4$$ lần đoán. Tổng quát thì nếu như Hiên cho hưng $$n$$ số để đoán thì Hưng chỉ cần dùng $$\log_2 {n}$$ lần đoán. Và đây cũng là tư tưởng của tìm kiếm nhị phân. Chia đôi tập ra để tìm kiếm.

Vì chia đội tập nên số lần thực hiện tối đa như đã nói ở trên là $$\log_2 {n}$$ và độ phức tạp trung bình là $$\mathcal{O}(\log{}n)$$



Điều kiện để chặt nhị phân:

1. Có thể xác định phần tử giữa một cách rõ ràng.
2. Có cách để kiểm tra "lớn hơn", "bé hơn".
3. Nếu số x thõa mản tính chất thì bất kỳ số nào lớn hơn hoặc nhỏ hơn x cũng phải thỏa mãn (xem bài tập 1 ở phần 2 để rõ)



Code mẫu tìm kiếm nhị phân với các bài toán tìm giá trị chính xác (như ví dụ đoán số ở trên):

<script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2Flycheea%2Flycheea.github.io%2Fblob%2Fmain%2Fblogs%2FBinary_Search%2Fbinary_search_template_exactly.cpp&style=monokai-sublime&showCopy=on"></script>



Code mẫu đối với các bài toán tìm giá trị lớn nhất, bé nhất (tìm số lớn nhất, bé nhất không vượt quá số $$k$$ nằm trong mảng, ....):

<script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2Flycheea%2Flycheea.github.io%2Fblob%2Fmain%2Fblogs%2FBinary_Search%2Fbinary_search_template_minmax.cpp&style=monokai-sublime&showCopy=on"></script>



### Phần 2: Ra mắt mẹ vợ

**Trong phần này chúng ta sẽ cùng làm một vài bài tập vận dụng cơ bản về chặt nhị phân**



***Câu chuyện 2:*** Sau khi Hiên đồng ý lấy Hưng thì hai người về nhà vợ ra mắt. Bố Hiên thấy Hưng xong thì rất ưng ý và để bồi dưỡng tình cha con thì hai người hẹn nhau 6h sáng mai lên núi đốn củi cùng nhau. Sau khi đốn xong thì được $$n$$ thanh gỗ có độ dài lần lượt là $$a_1, a_2, a_3,..., a_n$$. Bố Hiên kể rằng mình đang muốn xây một cái hàng rào từ ít nhất $$k$$ thanh gỗ có độ dài bằng nhau và độ dài mỗi thanh gỗ phải cao nhất để đảm bảo an toàn. Muốn lấy lòng bác gái Hưng đã quyết chí sẽ dựng rào cho bác nhưng Hưng lại không biết tính độ dài thanh gỗ cần cắt là bao nhiêu? Các bạn hãy giúp Hưng nhé!



​	**fence.inp**

​	Dòng đầu ghi hai số nguyên dương là $$n$$ và $$k$$ là số thanh gỗ đang có và số thanh gỗ cần dùng để dựng rào ($$1 \le n \le {10}^4, \ 1 \le k \le {10}^9$$)

​	Mỗi dòng tiếp theo là một số nguyên dương là chiều dài thanh gỗ ($$a_i \le {10}^9$$)	

​	**fence.out**

​	Độ dài lớn nhất mỗi thanh gỗ với độ chính xác hai số thập phân



*Bạn có [nộp bài ở đây](https://domapp.hoanen.com/question/61618f4bb7298b3837930674/)



##### **Solution:**

Nhận xét:

- Ta nhận thấy nếu chiều dài $$l$$ có thể xây được hàng rào thì bất kỳ chiều dài nào bé hơn $$l$$ đều có thể dùng để xây được hàng rào

- Ta có thể kiểm tra tính "bé hơn", "lớn hơn" của một chiều dài $$l$$ bất kỳ một cách nhanh chóng trong $$\mathcal{O}(n)$$

--> Chặt nhị phân

Ta nhận thấy xử lý số chấm động rất khó cài đặt và dễ xảy ra sai số nên khi nhập vào thì ta sẽ nhân tất cả $$a_i$$ lên $$100$$ lần. Sau đó ta sẽ chặt và in ra kết quả chia cho $$100$$. Dưới đây là code mẫu



##### **Code mẫu:** 

<script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2Flycheea%2Flycheea.github.io%2Fblob%2Fmain%2Fblogs%2FBinary_Search%2Ffence.cpp&style=monokai-sublime&showCopy=on"></script>

Độ phức tạp $$\mathcal{O}(n\log{}n)$$



(Còn tiếp...)

{% endraw %}


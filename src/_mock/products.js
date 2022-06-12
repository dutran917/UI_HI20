const products = [
  {
    id: 1,
    title: 'CHÍNH CHỦ CẦN BÁN NHÀ NGÕ 250/6 PHỐ TÂN MAI, HOÀNG MAI, HN 54M2, 3 TẦNG CHỈ 4.95 TỶ',
    price: '4.95 tỷ',
    area: '54 m²',
    room: '4 PN',
    imageSrc: [
      'https://file4.batdongsan.com.vn/2022/01/16/20220116005050-8b25_wm.jpg',
      'https://file4.batdongsan.com.vn/2022/01/16/20220116005101-bb1f_wm.jpg',
      'https://file4.batdongsan.com.vn/2022/01/16/20220116005118-582d_wm.jpg',
    ],
    active: true,
    detail:
      'Nhà 3 tầng 4 ngủ phân lô ô bàn cờ - lô góc - xe chạy vòng quanh không phải quay đầu; nhà đẹp long lanh - ngõ thông 3 ngả - cả 3 cách ô tô tránh khoảng 20 - 30 bước chân, cách chợ 20m - cách trường cấp 1,2,3, bãi gửi ô tô, chợ hoa và hồ Đền Lừ khoảng 1 km quay đầu, gần bến xe phía nam, Nước Ngầm, nhiều trường đại học, bệnh viện và TTTM lớn...',
  },
  {
    id: 2,
    title: 'SỐC!!!BÁN ĐẤT TẶNG BIỆT THỰ 3 TẦNG,TÂN MINH,THƯỜNG TÍN,HN.CÁCH BX NƯỚC NGẦM 15PH.165M2 GIÁ 5,5 TỶ',
    price: '5.5 tỷ',
    area: '165 m²',
    room: '4 PN',
    imageSrc: [
      'https://file4.batdongsan.com.vn/2022/06/11/20220611095139-9bc8_wm.jpeg',
      'https://file4.batdongsan.com.vn/2022/06/11/20220611095140-5142_wm.jpeg',
      'https://file4.batdongsan.com.vn/2022/06/11/20220611095141-10e2_wm.jpeg',
    ],
    active: true,
    detail:
      'Em chính chủ bán đất 165m2.tặng biệt thự siêu đẹp 3 tầng.cách trung tâm Thương tín 1,5km cách vành đai 4= 2km cách chợ lớn 100m,gần mẫu giáo,cấp 1,cấp 2. \n nhà mới hoàn thiện đẹp long lanh mặt tiền 14m nhà có 4phòng ngủ,4phòng vệ sinh,2phòng khách,1 phòng thờ,1 sân chơi,2sảnh,1gara ôtô,1bể cá tiểu cảnh',
  },
  {
    id: 3,
    title: 'SỐC!!!BÁN ĐẤT TẶNG BIỆT THỰ 3 TẦNG,TÂN MINH,THƯỜNG TÍN,HN.CÁCH BX NƯỚC NGẦM 15PH.165M2 GIÁ 5,5 TỶ',
    price: '5.5 tỷ',
    area: '165 m²',
    room: '4 PN',
    imageSrc: [
      'https://file4.batdongsan.com.vn/2022/06/11/20220611095139-9bc8_wm.jpeg',
      'https://file4.batdongsan.com.vn/2022/06/11/20220611095140-5142_wm.jpeg',
      'https://file4.batdongsan.com.vn/2022/06/11/20220611095141-10e2_wm.jpeg',
    ],
    active: true,
    detail:
      'Em chính chủ bán đất 165m2.tặng biệt thự siêu đẹp 3 tầng.cách trung tâm Thương tín 1,5km cách vành đai 4= 2km cách chợ lớn 100m,gần mẫu giáo,cấp 1,cấp 2. \n nhà mới hoàn thiện đẹp long lanh mặt tiền 14m nhà có 4phòng ngủ,4phòng vệ sinh,2phòng khách,1 phòng thờ,1 sân chơi,2sảnh,1gara ôtô,1bể cá tiểu cảnh',
  },
  {
    id: 4,
    title: 'SỐC!!!BÁN ĐẤT TẶNG BIỆT THỰ 3 TẦNG,TÂN MINH,THƯỜNG TÍN,HN.CÁCH BX NƯỚC NGẦM 15PH.165M2 GIÁ 5,5 TỶ',
    price: '5.5 tỷ',
    area: '165 m²',
    room: '4 PN',
    imageSrc: [
      'https://file4.batdongsan.com.vn/2022/06/11/20220611095139-9bc8_wm.jpeg',
      'https://file4.batdongsan.com.vn/2022/06/11/20220611095140-5142_wm.jpeg',
      'https://file4.batdongsan.com.vn/2022/06/11/20220611095141-10e2_wm.jpeg',
    ],
    active: true,
    detail:
      'Em chính chủ bán đất 165m2.tặng biệt thự siêu đẹp 3 tầng.cách trung tâm Thương tín 1,5km cách vành đai 4= 2km cách chợ lớn 100m,gần mẫu giáo,cấp 1,cấp 2. \n nhà mới hoàn thiện đẹp long lanh mặt tiền 14m nhà có 4phòng ngủ,4phòng vệ sinh,2phòng khách,1 phòng thờ,1 sân chơi,2sảnh,1gara ôtô,1bể cá tiểu cảnh',
  },
  {
    id: 5,
    title: 'SỐC!!!BÁN ĐẤT TẶNG BIỆT THỰ 3 TẦNG,TÂN MINH,THƯỜNG TÍN,HN.CÁCH BX NƯỚC NGẦM 15PH.165M2 GIÁ 5,5 TỶ',
    price: '5.5 tỷ',
    area: '165 m²',
    room: '4 PN',
    imageSrc: [
      'https://file4.batdongsan.com.vn/2022/06/11/20220611095139-9bc8_wm.jpeg',
      'https://file4.batdongsan.com.vn/2022/06/11/20220611095140-5142_wm.jpeg',
      'https://file4.batdongsan.com.vn/2022/06/11/20220611095141-10e2_wm.jpeg',
    ],
    active: true,
    detail:
      'Em chính chủ bán đất 165m2.tặng biệt thự siêu đẹp 3 tầng.cách trung tâm Thương tín 1,5km cách vành đai 4= 2km cách chợ lớn 100m,gần mẫu giáo,cấp 1,cấp 2. \n nhà mới hoàn thiện đẹp long lanh mặt tiền 14m nhà có 4phòng ngủ,4phòng vệ sinh,2phòng khách,1 phòng thờ,1 sân chơi,2sảnh,1gara ôtô,1bể cá tiểu cảnh',
  },
  {
    id: 6,
    title: 'BÁN NHANH GIÁ CỰC SỐC CĂN 80M2 VIEW VƯỜN HOA NHỈNH 8 TỶ',
    price: '8 tỷ',
    area: '80 m²',
    room: '3 PN',
    imageSrc: [
      'https://file4.batdongsan.com.vn/2022/06/11/20220611120027-553a_wm.jpg',
      'https://file4.batdongsan.com.vn/2022/06/11/20220611120027-898f_wm.jpg',
      'https://file4.batdongsan.com.vn/2022/06/11/20220611120028-650f_wm.jpg',
    ],
    active: false,
    detail: ` Bán nhanh giá cực sốc căn 80m2 Geleximco Lê Trọng Tấn \n - Diện tích: 80m2, đường trước nhà: 13.5m. \n- Vị trí siêu đẹp. Không lỗi phong thủy. View vườn hoa \n - Nhà thoáng mát, tất cả các phòng ngập tràn ánh sáng \n- Cách Vinsmart city 500m, vài bước chân sang sang Aeon mall Hà Đông, \ngần trường liên cấp HAS .\n- Là một trong những dãy liền kề cư dân về ở đông vui của khu Geleximco, hàng xóm thân thiện, hòa đồng \n`,
  },
  {
    id: 7,
    title: 'BÁN NHÀ RIÊNG 70M2 TẠI HOÀNG MAI SỔ ĐỎ CHÍNH CHỦ',
    price: '13 tỷ',
    area: '200 m²',
    room: '4 PN',
    imageSrc: [
      'https://file4.batdongsan.com.vn/2022/06/09/oBbVxNwv/20220609171341-2303_wm.jpg',
      'https://file4.batdongsan.com.vn/2022/06/09/oBbVxNwv/20220609171402-7926_wm.jpg',
      'https://file4.batdongsan.com.vn/2022/06/09/oBbVxNwv/20220609171345-8901_wm.jpg',
    ],
    active: false,
    detail:
      'Chính chủ bán nhà TT6, M6B ô số 8, phường Đại Kim, Hoàng Mai, Hà Nội.\n- DT sàn 70m2, DT sử dụng: 210m2.\n- Gồm 3 tầng, 1 tum.\n- Đường rộng, 2 ô tô vào thoải mái, xung quanh nhiều tiện ích.',
  },
  {
    id: 8,
    title: 'BÁN NHÀ RIÊNG 70M2 TẠI HOÀNG MAI SỔ ĐỎ CHÍNH CHỦ',
    price: '13 tỷ',
    area: '200 m²',
    room: '4 PN',
    imageSrc: [
      'https://file4.batdongsan.com.vn/2022/06/09/oBbVxNwv/20220609171341-2303_wm.jpg',
      'https://file4.batdongsan.com.vn/2022/06/09/oBbVxNwv/20220609171402-7926_wm.jpg',
      'https://file4.batdongsan.com.vn/2022/06/09/oBbVxNwv/20220609171345-8901_wm.jpg',
    ],
    active: false,
    detail:
      'Chính chủ bán nhà TT6, M6B ô số 8, phường Đại Kim, Hoàng Mai, Hà Nội.\n- DT sàn 70m2, DT sử dụng: 210m2.\n- Gồm 3 tầng, 1 tum.\n- Đường rộng, 2 ô tô vào thoải mái, xung quanh nhiều tiện ích.',
  },
  {
    id: 9,
    title: 'BÁN NHÀ RIÊNG 70M2 TẠI HOÀNG MAI SỔ ĐỎ CHÍNH CHỦ',
    price: '13 tỷ',
    area: '200 m²',
    room: '4 PN',
    imageSrc: [
      'https://file4.batdongsan.com.vn/2022/06/09/oBbVxNwv/20220609171341-2303_wm.jpg',
      'https://file4.batdongsan.com.vn/2022/06/09/oBbVxNwv/20220609171402-7926_wm.jpg',
      'https://file4.batdongsan.com.vn/2022/06/09/oBbVxNwv/20220609171345-8901_wm.jpg',
    ],
    active: false,
    detail:
      'Chính chủ bán nhà TT6, M6B ô số 8, phường Đại Kim, Hoàng Mai, Hà Nội.\n- DT sàn 70m2, DT sử dụng: 210m2.\n- Gồm 3 tầng, 1 tum.\n- Đường rộng, 2 ô tô vào thoải mái, xung quanh nhiều tiện ích.',
  },
];

export default products;

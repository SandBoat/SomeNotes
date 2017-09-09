$(function () {
    var model = {
        currenCat: {},
        catList: [{
            name: "cat1",
            clickCount: 0,
            url: "./img/cat.jpg"
        }, {
            name: "cat2",
            clickCount: 0,
            url: "./img/cat2.jpg"
        }, {
            name: "cat3",
            clickCount: 0,
            url: "./img/cat3.jpg"
        }, {
            name: "cat4",
            clickCount: 0,
            url: "./img/cat4.jpg"
        }, {
            name: "cat5",
            clickCount: 0,
            url: "./img/cat6.jpg"
        },],
        isFormShow: false,
    };

    var octopus = {
        setCurrentCat: function (index) {
            model.currenCat = model.catList[index];
            catView.render();
        },
        changeCurrentCat: function (cat) {
            model.currenCat.name = cat.name;
            model.currenCat.url = cat.url;
            model.currenCat.count = cat.count;
            catView.render();
        },
        getCurrentCat: function () {
            return model.currenCat;
        },

        getCatList: function () {
            return model.catList;
        },
        getCatListName: function () {
            return octopus.getCatList().map(function (cat) {
                return cat.name;
            });
        },
        getIsFormShow: function () {
            return model.isFormShow;
        },
        changeIsFormShow:function(){
            model.isFormShow = !model.isFormShow;
            formView.render();
        },
        catClick: function () {
            model.currenCat.clickCount++;
            catView.render();
        },
        init: function () {
            model.currenCat = model.catList[0];
            listView.init();
            catView.init();
            formView.init();
        }
    };

    var listView = {
        init: function () {
            this.navList = $("#nav");
            this.navList.click(function (e) {
                octopus.setCurrentCat($(e.target).data().index);
            })
            this.render();
        },
        render: function () {
            var navStr = '';
            octopus.getCatListName().forEach(function (name, index) {
                navStr += '<a class="box-wrap-list-btn btn" data-index="' + index + '">' + name + '</a>'
            }, this);
            this.navList.html(navStr);
        },
    };

    var catView = {
        init: function () {
            this.boxElem = $("#box");
            this.titleElem = $("#box-title");
            this.imgElem = $("#box-img");
            this.countElem = $("#box-count");

            this.boxElem.click(function () {
                octopus.catClick();
            });
            this.render();
        },
        render: function () {
            var cat = octopus.getCurrentCat();

            this.titleElem.text(cat.name);
            this.imgElem.attr("src", cat.url);
            this.countElem.text("点击次数：" + cat.clickCount);
        },
    };

    var formView = {
        init: function () {
            this.showFormBtn = $("#box-adminBtn");
            this.form = $('#box-form');
            this.saveBtn = $('#box-form input[name="save"]');
            this.cancelBtn = $('#box-form input[name="cancel"]');
            // 绑定点击事件
            this.showFormBtn.click(() => {
               octopus.changeIsFormShow();
            });
            this.cancelBtn.click((e) => {
                e.preventDefault();
                octopus.changeIsFormShow();
            });
            this.form.submit((e) => {
                e.preventDefault();
                var cat = octopus.getCurrentCat();
                // 获取用户输入
                var title = $('#box-form input[name="title"]').val() || "";
                var imgUrl = $('#box-form input[name="imgUrl"]').val() || "";
                var count = parseInt($('#box-form input[name="count"]').val()) || -1;
                // 更新数据
                if (title && title !== cat.name) cat.name = title;
                if (imgUrl && imgUrl !== cat.url) cat.url = imgUrl;
                if (count !== -1 && count !== cat.clickCount) cat.clickCount = count;
                octopus.changeCurrentCat(cat);
                octopus.changeIsFormShow();
            })
            this.render();
        },
        render: function () {
            if(octopus.getIsFormShow()){
                this.showFormBtn.hide();
                this.form.show();
            }else{
                this.form.hide();
                this.showFormBtn.show();
            }
        },
    }

    octopus.init();
});
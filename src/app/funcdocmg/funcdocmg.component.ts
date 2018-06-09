import { Component, OnInit } from '@angular/core';
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload';
import * as $ from 'jquery'

@Component({
  selector: 'app-funcdocmg',
  templateUrl: './funcdocmg.component.html',
  styleUrls: ['./funcdocmg.component.css']
})

export class FuncdocmgComponent implements OnInit {
  private funcpoints:Array<funcpoint>;
  private fileuploadoption:FileUploaderOptions;
  private uploader1: FileUploader = new FileUploader({
    url: '/codebuilder/uploadClient',
    method: 'POST',
    itemAlias: 'file'
  });
  constructor() { }
  isUpdateTR=1;


  ngOnInit() {
    this.funcpoints=[
      new funcpoint("一","功能点1","已编辑"),
      new funcpoint("一","功能点2","未编辑"),
      new funcpoint("二","功能点3","已编辑"),
    ]
    let k=this.uploader1;
    $("img.upload").each(function(){
      $(this).click(function(){
        var a=$(this).attr("id");
        console.log(a);
        $("#"+a+"uploadbtn").click();
      });
    });
  }
  uploadimg(){
    this.uploader1.queue[0].onSuccess = function (response, status, headers){
      if (status == 200) {
        const tempRes = response;
        alert(response);
      } else {
        alert('上传失败');
      }
    }
    
    var a=$("#functitle").text();
    var b=$("#point").val();
    this.fileuploadoption.additionalParameter={
      ["functitle"]:a,
      ["point"]:b
    };
// onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any;
this.uploader1.queue[0].upload(); // 开始上传
// this.uploader.queue[0].onSuccess()
alert('上传之后');
        var a=$(this).attr("id");
        var imgFile = document.getElementById(a+'uploadbtn')[0].files[0];
        var fr = new FileReader();
        fr.onload = function() {
          document.getElementById('preview').getElementsByTagName('img')[0].src = fr.result;
          document.getElementById('preview').getElementsByTagName('img')[1].src = fr.result;
          document.getElementById(a)[0].src=fr.result;
        };
        fr.readAsDataURL(imgFile);
  }
  selectedFileOnChanged(event: any) {
    // 这里是文件选择完成后的操作处理
    // alert('上传文件改变啦');
    console.log(event.target.value);
    console.log(event);
  }
}
export class funcpoint{
  constructor(
    public name:String,
    public module:String,
    public node:String
  ){}

}
import { Component, OnInit } from '@angular/core';
import * as echarts from 'ngx-echarts';
@Component({
  selector: 'app-indexmodule',
  templateUrl: './indexmodule.component.html',
  styleUrls: ['./indexmodule.component.css']
})
export class IndexmoduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  chartOption = {
    title: {
        text: '项目任务完成情况图'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data: ['已完成任务', '进行中任务', '未开始任务', '完成功能点数量', '未成功能点数量']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name: '已完成任务',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '进行中任务',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '未开始任务',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '完成功能点数量',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
}

}

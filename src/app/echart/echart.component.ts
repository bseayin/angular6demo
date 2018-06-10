import { Component, OnInit } from '@angular/core';
import * as echarts from 'ngx-echarts';

@Component({
  selector: 'app-echart',
  templateUrl: './echart.component.html',
  styleUrls: ['./echart.component.css']
})
export class EchartComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    console.log(this.chartOption);
    this.chartOption.series[0].data=[120, 132, 101, 134, 90, 230, 210];
    this.chartOption.series[1].data=[120, 132, 101, 134, 90, 230, 210];
  }
  chartOption = {
    title: {
        text: '任务报表'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data: ['任务总数', '未开始', '进行中', '已完成', '已验收']
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
            name: '任务总数',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
           
        },
        {
            name: '未开始',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '进行中',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '已完成',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '已验收',
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

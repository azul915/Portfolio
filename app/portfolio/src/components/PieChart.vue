<script>
import { Doughnut } from 'vue-chartjs'

export default {
    name: 'Pie',
    extends: Doughnut,
    props: { selfEval: Number },
    data () {
        return {
            chartData: {
                datasets: [{
                    data: [
                        this.selfEval,
                        5 - this.selfEval
                    ],
                    backgroundColor: [
                        'rgba(33, 150, 243, 1)',
                        'rgba(225, 225, 225, 0.1)',
                    ],
                    hoverBackgroundColor: [
                        'rgba(33, 150, 243, 1)',
                        'rgba(225, 225, 225, 0.1)',
                    ],
                    borderColor: [
                        'rgba(33, 150, 243, 1)',
                        'rgba(225, 225, 225, 0.1)',
                    ],
                }],
            },
            options: {
                tooltips: {
                    enabled: false,
                },
                cutoutPercentage: 90,
            }
        }
    },
    mounted() {
        this.renderChart(this.chartData, this.options)
    }
}
</script>
export default {
  selected: [
    {
      image: require("../../static/img/papers/thumb/geonetverse.png").default,
      authors:
        "Zikun Deng, Shifu Chen, Xiao Xie, Guodao Sun, Mingliang Xu, <u>Di Weng*</u>, Yingcai Wu*",
      title: "Multilevel Visual Analysis of Aggregate Geo-Networks",
      venue:
        "IEEE Transactions on Visualization and Computer Graphics (Early Access)",
      doi: "10.1109/TVCG.2022.3229953",
      abstract:
        "城市现象中存在着许多模式，比如空气污染和人类流动性，可以被描述为许多有向地理空间网络（地理网络），用来表示城市空间中的传播过程。这些地理网络可以从多个层次进行分析，包括宏观层面的总结所有地理网络，中观层面的比较或总结地理网络的部分，以及微观层面的检查个别地理网络。大多数现有的可视化技术无法很好地支持多层次分析。这些技术通过以下方式工作：1）将地理网络分开显示在多个地图上会导致在不同地图之间进行繁重的上下文切换成本；2）将所有地理网络汇总为单个网络可能会导致个别信息的丢失；3）将所有地理网络绘制在一个地图上可能会遇到视觉可扩展性问题，难以区分个别地理网络。在这项研究中，我们提出了一种新颖的可视化技术，名为GeoNetverse，用于从多个层次分析聚合地理网络。受地铁地图的启发，GeoNetverse通过以堆叠方式放置地理网络之间共享的边来平衡地理网络的总览和详细信息。为了增强视觉可扩展性，GeoNetverse采用了层次细节渲染、渐进交叉最小化和着色技术。我们进行了一系列评估，从多个角度评估了GeoNetverse的性能。",
    },
    {
      image: require("../../static/img/papers/thumb/ecoalvis.png").default,
      authors:
        "Shuhan Liu, <u>Di Weng*</u>, Yuan Tian, Zikun Deng, Haoran Xu, Xiangyu Zhu, Honglei Yin, Xianyuan Zhan, Yingcai Wu",
      title:
        "ECoalVis: Visual Analysis of Control Strategies in Coal-fired Power Plants",
      venue:
        "IEEE Transactions on Visualization and Computer Graphics, vol. 29, no. 1, pp. 1091-1101, Jan. 2023",
      doi: "10.1109/TVCG.2022.3209430",
      abstract:
        "提高燃煤发电厂的效率具有诸多好处。控制策略是影响效率的主要因素之一。然而，由于燃煤发电厂内部复杂而动态的环境，很难从大量传感器数据中提取和评估控制策略及其在系统中的级联影响。现有的手动和数据驱动方法无法很好地支持控制策略的分析，因为这些方法耗时且无法与发电厂系统的复杂性相适应。我们确定了三个挑战：a）从大规模动态传感器数据中交互式提取控制策略，b）直观地表示复杂发电厂系统中传感器之间的级联影响，c）基于时间滞后的分析控制策略对发电效率的影响。通过与能源领域专家合作，我们提出了ECoalVis，一种新颖的交互式系统，专门供专家使用，从历史传感器数据中可视化分析燃煤发电厂的控制策略。我们使用实际的历史数据集对所提出的系统进行了两个使用场景的评估，并获得了专家的正面反馈，证明了系统的有效性。",
    },
    {
      image: require("../../static/img/papers/thumb/rigel.png").default,
      authors:
        "Ran Chen, <u>Di Weng*</u>, Yanwei Huang, Xinhuan Shu, Jiayi Zhou, Guodao Sun, Yingcai Wu",
      title: "Rigel: Transforming Tabular Data by Declarative Mapping",
      venue:
        "IEEE Transactions on Visualization and Computer Graphics, vol. 29, no. 1, pp. 128-138, Jan. 2023",
      doi: "10.1109/TVCG.2022.3209385",
      abstract:
        "我们提出Rigel，一个用于快速转换表格数据的交互式系统。Rigel采用了一种新的声明性映射方法，将数据转换过程表述为从数据到目标表格的行、列和单元格通道的直接映射。为了构建这样的映射，Rigel允许用户直接将输入数据的属性从输入数据拖动到这三个通道中，或者间接地在电子表格中拖动或输入数据值，然后Rigel会根据这些交互推荐可能的映射，以实现高效和直观的数据转换。推荐的映射是通过基于行、列和单元格通道枚举和组合数据变量来生成的，从而揭示了潜在表格形式的可能性，并便于在许多数据转换场景中进行开放式的探索，例如设计用于展示的表格。与现有的通过组合操作（如转置和透视）来转换数据的系统不同，Rigel对这些操作的先前知识要求较少，并且通过从通道构建表格比传统的按示例方法生成操作序列更高效，产生的歧义较少。用户研究结果表明，与最先进的按示例方法相比，Rigel在时间和交互方面要求较少，适用于更多的场景。还展示了多种转换案例的图库，以展示Rigel的表达能力。",
    },
  ],
  2023: [
    {
      image: require("../../static/img/papers/thumb/geocamera.png").default,
      authors:
        "Wenchao Li, Zhan Wang, Yun Wang, <u>Di Weng</u>, Liwenhan Xie, Siming Chen, Haidong Zhang, Huamin Qu",
      title:
        "GeoCamera: Telling Stories in Geographic Visualizations with Camera Movements",
      venue:
        "Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems (CHI '23)",
      doi: "10.1145/3544548.3581470",
    },
    {
      image: require("../../static/img/papers/thumb/geonetverse.png").default,
      authors:
        "Zikun Deng, Shifu Chen, Xiao Xie, Guodao Sun, Mingliang Xu, <u>Di Weng*</u>, Yingcai Wu*",
      title: "Multilevel Visual Analysis of Aggregate Geo-Networks",
      venue:
        "IEEE Transactions on Visualization and Computer Graphics (Early Access)",
      doi: "10.1109/TVCG.2022.3229953",
    },
    {
      image: require("../../static/img/papers/thumb/ecoalvis.png").default,
      authors:
        "Shuhan Liu, <u>Di Weng*</u>, Yuan Tian, Zikun Deng, Haoran Xu, Xiangyu Zhu, Honglei Yin, Xianyuan Zhan, Yingcai Wu",
      title:
        "ECoalVis: Visual Analysis of Control Strategies in Coal-fired Power Plants",
      venue:
        "IEEE Transactions on Visualization and Computer Graphics, vol. 29, no. 1, pp. 1091-1101, Jan. 2023",
      doi: "10.1109/TVCG.2022.3209430",
    },
    {
      image: require("../../static/img/papers/thumb/rigel.png").default,
      authors:
        "Ran Chen, <u>Di Weng*</u>, Yanwei Huang, Xinhuan Shu, Jiayi Zhou, Guodao Sun, Yingcai Wu",
      title: "Rigel: Transforming Tabular Data by Declarative Mapping",
      venue:
        "IEEE Transactions on Visualization and Computer Graphics, vol. 29, no. 1, pp. 128-138, Jan. 2023",
      doi: "10.1109/TVCG.2022.3209385",
    },
    {
      image: require("../../static/img/papers/thumb/urbansurvey.png").default,
      authors:
        "Zikun Deng, <u>Di Weng*</u>, Shuhan Liu, Yuan Tian, Mingliang Xu, Yingcai Wu*",
      title:
        "A survey of urban visual analytics: Advances and future directions",
      venue: "Computational Visual Media, vol. 9, pp. 3–39, 2023",
      doi: "10.1007/s41095-022-0275-7",
    },
    {
      image: require("../../static/img/papers/thumb/ct3.png").default,
      authors: "Zikun Deng, <u>Di Weng*</u>, Yingcai Wu",
      title:
        "You are experienced: interactive tour planning with crowdsourcing tour data from web",
      venue: "Journal of Visualization, vol. 26, pp. 385–401, 2023",
      doi: "10.1007/s12650-022-00884-1",
    },
  ],
  2022: [
    {
      image: require("../../static/img/papers/thumb/nebula.png").default,
      authors:
        "Ran Chen, Xinhuan Shu, Jiahui Chen, <u>Di Weng</u>, Junxiu Tang, Siwei Fu, Yingcai Wu",
      title: "Nebula: A Coordinating Grammar of Graphics",
      venue:
        "IEEE Transactions on Visualization and Computer Graphics, vol. 28, no. 12, pp. 4127-4140, 2022",
      doi: "10.1109/TVCG.2021.3076222",
    },
    {
      image: require("../../static/img/papers/thumb/viscas.png").default,
      authors:
        "Zikun Deng, <u>Di Weng</u>, Yuxuan Liang, Jie Bao, Yu Zheng, Tobias Schreck, Mingliang Xu, Yingcai Wu",
      title: "Visual Cascade Analytics of Large-Scale Spatiotemporal Data",
      venue:
        "IEEE Transactions on Visualization and Computer Graphics, vol. 28, no. 6, pp. 2486-2499, 2022",
      doi: "10.1109/TVCG.2021.3071387",
    },
    {
      image: require("../../static/img/papers/thumb/ordermonitor.png").default,
      authors:
        "Junxiu Tang, Yuhua Zhou, Tan Tang, <u>Di Weng</u>, Boyang Xie, Lingyun Yu, Huaqiang Zhang, Yingcai Wu",
      title:
        "A Visualization Approach for Monitoring Order Processing in E-Commerce Warehouse",
      venue:
        "IEEE Transactions on Visualization and Computer Graphics, vol. 28, no. 1, pp. 857-867, 2022",
      doi: "10.1109/TVCG.2021.3114878",
    },
    {
      image: require("../../static/img/papers/thumb/compass.png").default,
      authors:
        "Zikun Deng, <u>Di Weng</u>, Xiao Xie, Jie Bao, Yu Zheng, Mingliang Xu, Wei Chen, Yingcai Wu",
      title: "Compass: Towards Better Causal Analysis of Urban Time Series",
      venue:
        "IEEE Transactions on Visualization and Computer Graphics, vol. 28, no. 1, pp. 1051-1061, 2022",
      doi: "10.1109/TVCG.2021.3114875",
    },
  ],
  2021: [
    {
      image: require("../../static/img/papers/thumb/industrial_survey.png")
        .default,
      authors: "Shuhan Liu, <u>Di Weng</u>, Yingcai Wu",
      title: "A Review on Industrial Data Visual Analytics",
      venue:
        "Journal of Integration Technology, vol. 11, no. 6, pp. 3-19, 2021",
      doi: "10.12146/j.issn.2095-3135.20210630003",
    },
    {
      image: require("../../static/img/papers/thumb/corvizor.png").default,
      authors:
        "Yingcai Wu, <u>Di Weng</u>, Zikun Deng, Jie Bao, Mingliang Xu, Zhangye Wang, Yu Zheng, Zhiyu Ding, Wei Chen",
      title:
        "Towards Better Detection and Analysis of Massive Spatiotemporal Co-Occurrence Patterns",
      venue:
        "IEEE Transactions on Intelligent Transportation Systems, vol. 22, no. 6, pp. 3387-3402, 2021",
      doi: "10.1109/TITS.2020.2983226",
    },
    {
      image: require("../../static/img/papers/thumb/bnva.png").default,
      authors:
        "<u>Di Weng</u>, Chengbo Zheng, Zikun Deng, Mingze Ma, Jie Bao, Yu Zheng, Mingliang Xu, Yingcai Wu",
      title: "Towards Better Bus Networks: A Visual Analytics Approach",
      venue:
        "IEEE Transactions on Visualization and Computer Graphics, vol. 27, no. 2, pp. 817-827, 2021",
      doi: "10.1109/TVCG.2020.3030458",
    },
    {
      image: require("../../static/img/papers/thumb/mcrs.png").default,
      authors:
        "<u>Di Weng</u>, Ran Chen, Jianhui Zhang, Jie Bao, Yu Zheng, Yingcai Wu",
      title:
        "Pareto-Optimal Transit Route Planning With Multi-Objective Monte-Carlo Tree Search",
      venue:
        "IEEE Transactions on Intelligent Transportation Systems, vol. 22, no. 2, pp. 1185-1195, 2021",
      doi: "10.1109/TITS.2020.2964012",
    },
  ],
  earlier: [
    {
      image: require("../../static/img/papers/thumb/airvis.png").default,
      authors:
        "Zikun Deng, <u>Di Weng</u>, Jiahui Chen, Ren Liu, Zhibin Wang, Jie Bao, Yu Zheng, Yingcai Wu",
      title: "AirVis: Visual Analytics of Air Pollution Propagation",
      venue:
        "IEEE Transactions on Visualization and Computer Graphics, vol. 26, no. 1, pp. 800-810, 2020",
      doi: "10.1109/TVCG.2019.2934670",
    },
    {
      image: require("../../static/img/papers/thumb/srvis.png").default,
      authors:
        "<u>Di Weng</u>, Ran Chen, Zikun Deng, Feiran Wu, Jingmin Chen, Yingcai Wu",
      title:
        "SRVis: Towards Better Spatial Integration in Ranking Visualization",
      venue:
        "IEEE Transactions on Visualization and Computer Graphics, vol. 25, no. 1, pp. 459-469, 2019",
      doi: "10.1109/TVCG.2018.2865126",
    },
    {
      image: require("../../static/img/papers/thumb/homefinder.png").default,
      authors: "<u>Di Weng</u>, Heming Zhu, Jie Bao, Yu Zheng, Yingcai Wu",
      title:
        "HomeFinder Revisited: Finding Ideal Homes with Reachability-Centric Multi-Criteria Decision Making",
      venue:
        "Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems (CHI '18), Paper 247, 1–12",
      doi: "10.1145/3173574.3173821",
    },
    {
      image: require("../../static/img/papers/thumb/smartadp.png").default,
      authors:
        "Dongyu Liu, <u>Di Weng</u>, Yuhong Li, Jie Bao, Yu Zheng, Huamin Qu, and Yingcai Wu",
      title:
        "SmartAdP: Visual Analytics of Large-scale Taxi Trajectories for Selecting Billboard Locations",
      venue:
        "IEEE Transactions on Visualization and Computer Graphics, vol. 23, no. 1, pp. 1-10, 2017",
      doi: "10.1109/TVCG.2016.2598432",
    },
  ],
};

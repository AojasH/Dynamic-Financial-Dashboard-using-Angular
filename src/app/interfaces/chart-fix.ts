import {
	ChartData,
	ChartOptions,
	ChartType,
	DefaultDataPoint,
	Plugin,
} from 'chart.js';

export interface ChartOptionsExtended<TType> extends ChartOptions {
	cutout: string;
}

export interface ChartConfigurationExtended<
	TType extends ChartType = ChartType,
	TData = DefaultDataPoint<TType>,
	TLabel = unknown
> {
	type: TType;
	data: ChartData<TType, TData, TLabel>;
	options?: ChartOptionsExtended<TType>;
	plugins?: Plugin<TType>[];
}

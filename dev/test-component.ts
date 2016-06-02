import {Component} from '@angular/core';
import {LoggingService} from './services/logging.service';


@Component({
	selector: 'test-component',
	template: `<h1
				[class.highlight]="localVarible.value === 'yes'">
					Look at some cool data binding
				</h1>
				<input type="text" #localVarible (keyup)="onLog(localVarible.value)"/>`,
	styleUrls: ['src/css/test-component.css'],
	providers: [LoggingService]
})

export class TestComponent {
	constructor(private _loggingService: LoggingService) {}

	onLog(message: string) {
		this._loggingService.log(message);
	}
}
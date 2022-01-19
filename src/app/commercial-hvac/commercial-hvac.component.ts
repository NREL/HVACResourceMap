import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

type Route = {
  name: string,
  route?: string,
  children?: Route[]
};

@Component({
  selector: 'app-commercial-hvac',
  templateUrl: './commercial-hvac.component.html',
  styleUrls: ['./commercial-hvac.component.scss']
})
export class CommercialHVACComponent implements OnDestroy {
  readonly routes: Route[] = [{
    name: 'Central Plant',
    children: [{
      name: 'Boiler',
      children: [{
        name: 'Performance Ratings',
        route: 'codes'
      }, {
        name: 'Energy Efficiency Measures',
        route: 'eems'
      }, {
        name: 'Calculators & Tools',
        route: 'tools'
      }, {
        name: 'Operation & Training',
        route: 'operation'
      }, {
        name: 'Procurement & Performance',
        route: 'procure'
      }, {
        name: 'Case Studies',
        route: 'cases'
      }]
    }, {
      name: 'Chiller',
      children: [{
        name: 'Performance Ratings',
        route: 'codes'
      }, {
        name: 'Energy Efficiency Measures',
        route: 'eems'
      }, {
        name: 'Calculators & Tools',
        route: 'tools'
      }, {
        name: 'Operation & Training',
        route: 'operation'
      }, {
        name: 'Procurement & Performance',
        route: 'procure'
      }, {
        name: 'Case Studies',
        route: 'cases'
      }]
    }, {
      name: 'Cooling Tower',
      children: [{
        name: 'Types'
      }, {
        name: 'Performance Ratings',
        route: 'codes'
      }, {
        name: 'Energy Efficiency Measures',
        route: 'eems'
      }, {
        name: 'Calculators & Tools',
        route: 'tools'
      }, {
        name: 'Operation & Training',
        route: 'operation'
      }, {
        name: 'Procurement & Performance',
        route: 'procure'
      }, {
        name: 'Case Studies',
        route: 'cases'
      }]
    }, {
      name: 'Cool Thermal Energy Storage'
    }, {
      name: 'Hot Thermal Energy Storage'
    }, {
      name: 'Pump',
      children: [{
        name: 'Performance Ratings',
        route: 'codes'
      }, {
        name: 'Energy Efficiency Measures',
        route: 'eems'
      }, {
        name: 'Calculators & Tools',
        route: 'tools'
      }, {
        name: 'Operation & Training',
        route: 'operation'
      }, {
        name: 'Procurement & Performance',
        route: 'procure'
      }, {
        name: 'Case Studies',
        route: 'cases'
      }]
    }, {
      name: 'Sensors & Controls',
      children: [{
        name: 'Operation & Training',
        route: 'operation'
      }]
    }]
  }, {
    name: 'Distribution',
    children: [{
      name: 'Air Handling Units',
      route: 'ahu',
      children: [{
        name: 'Types'
      }, {
        name: 'Performance Ratings',
        route: 'codes'
      }, {
        name: 'Energy Efficiency Measures',
        route: 'eems'
      }, {
        name: 'Operation & Training',
        route: 'operation'
      }, {
        name: 'Procurement & Performance',
        route: 'procure'
      }, {
        route: 'cases',
        name: 'Case Studies'
      }]
    }, {
      name: 'Ducting'
    }, {
      name: 'Diffusers'
    }, {
      name: 'Fans',
      children: [{
        name: 'Types'
      }, {
        name: 'Energy Efficiency Measures',
        route: 'eems'
      }, {
        name: 'Calculators & Tools',
        route: 'tools'
      }, {
        name: 'Operation & Training',
        route: 'operation'
      }, {
        name: 'Procurement & Performance',
        route: 'procure'
      }, {
        name: 'Case Studies',
        route: 'cases'
      }, {
        name: 'Tune-up Measures',
        route: 'tune'
      }]
    }, {
      name: 'Piping',
      children: [{
        name: 'Performance Ratings',
        route: 'codes'
      }, {
        name: 'Energy Efficiency Measures',
        route: 'eems'
      }, {
        name: 'Calculators & Tools',
        route: 'tools'
      }, {
        name: 'Operation & Training',
        route: 'operation'
      }, {
        name: 'Procurement & Performance',
        route: 'procure'
      }]
    }, {
      name: 'Steam Traps',
      children: [{
        name: 'Calculators & Tools',
        route: 'tools'
      }, {
        name: 'Operation & Training',
        route: 'operation'
      }, {
        name: 'Case Studies',
        route: 'cases'
      }]
    }, {
      name: 'Terminal Units'
    }, {
      name: 'Valve',
      children: [{
        name: 'Types'
      }, {
        name: 'Performance Ratings',
        route: 'codes'
      }, {
        name: 'Energy Efficiency Measures',
        route: 'eems'
      }, {
        name: 'Calculators & Tools',
        route: 'tools'
      }, {
        name: 'Operation & Training',
        route: 'operation'
      }, {
        name: 'Case Studies',
        route: 'cases'
      }]
    }, {
      name: 'VAV Boxes',
      route: 'vav'
    }, {
      name: 'Sensors & Controls',
      children: [{
        name: 'Operation & Training',
        route: 'operation'
      }]
    }]
  }];

  url?: string;
  private readonly _root = '/commercial-hvac';
  private _unsubscribe$ = new Subject<void>();

  constructor(private router: Router) {
    router.events.pipe(takeUntil(this._unsubscribe$)).subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

  join(...routes: Route[]): string {
    return `${this._root}/${routes.map(r => {
      return r.route ? r.route : r.name.toLowerCase().replace(/ +(& +)?/g, '-');
    }).join('/')}`;
  }
}

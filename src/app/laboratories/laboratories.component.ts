import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

type Route = {
  name: string,
  route?: string,
  children?: Route[]
};

@Component({
  templateUrl: './laboratories.component.html'
})
export class LaboratoriesComponent implements OnDestroy {
  readonly routes: Route[] = [{
    name: 'Lab Space',
    children: [{
      name: 'Laboratory Ventilation Effectiveness',
      children: [{
        name: 'Computational Fluid Dynamics (CFD)',
        route: 'computational-fluid-dynamics'
      }]
    }, {
      name: 'Demand Control Ventilation'
    }, {
      name: 'Occupancy Sensors'
    }, {
      name: 'Exposure Control Devices',
      children: [{
        name: 'Energy Efficiency Measures',
        route: 'eems'
      }, {
        name: 'Calculators & Tools',
        route: 'tools'
      }, {
        name: 'Operation & Training',
        route: 'operation'
      }]
    }, {
      name: 'Building Energy Modeling'
    }, {
      name: 'Energy Benchmarking for Labs'
    }]
  }, {
    name: 'Distribution',
    children: [{
      name: 'Low Pressure Drop Design'
    }, {
      name: 'Air Handling Units',
      route: 'ahu',
      children: [{
        name: 'Alternate HVAC'
      }, {
        name: 'Performance Ratings',
        route: 'codes'
      }, {
        name: 'Energy Efficiency Measures',
        route: 'eems'
      }, {
        name: 'Operation & Training',
        route: 'operation'
      }]
    }, {
      name: 'Fans'
    }, {
      name: 'Ducting'
    }, {
      name: 'Variable Air Volume Systems',
      route: 'vav-systems'
    }, {
      name: 'VAV Boxes',
      route: 'vav'
    }, {
      name: 'Diffuser'
    }, {
      name: 'Piping'
    }, {
      name: 'Steam Traps',
      children: [{
        name: 'Calculators & Tools',
        route: 'tools'
      }]
    }, {
      name: 'Valve'
    }]
  }, {
    name: 'Lab Exhaust Devices',
    children: [{
      name: 'Energy Recovery',
    }, {
      name: 'Optimized Exhaust Stack Design'
    }]
  }, {
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
      name: 'Chiller'
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
  }];

  url?: string;
  private readonly _root = '/laboratories';
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

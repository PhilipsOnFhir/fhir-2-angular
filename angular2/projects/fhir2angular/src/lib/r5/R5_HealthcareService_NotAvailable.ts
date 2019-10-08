import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Period } from './R5_Period'

export class R5_HealthcareService_NotAvailable      extends R5_BackboneElement
{

   static def : string = 'HealthcareService_NotAvailable';
   description : string ;
   during : R5_Period ;
}

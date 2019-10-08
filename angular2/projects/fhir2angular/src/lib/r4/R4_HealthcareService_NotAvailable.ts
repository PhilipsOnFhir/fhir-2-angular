import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Period } from './R4_Period'

export class R4_HealthcareService_NotAvailable      extends R4_BackboneElement
{

   static def : string = 'HealthcareService_NotAvailable';
   description : string ;
   during : R4_Period ;
}

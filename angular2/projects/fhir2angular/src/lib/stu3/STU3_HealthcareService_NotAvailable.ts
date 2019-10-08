import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Period } from './STU3_Period'

export class STU3_HealthcareService_NotAvailable      extends STU3_BackboneElement
{

   static def : string = 'HealthcareService_NotAvailable';
   description : string ;
   during : STU3_Period ;
}

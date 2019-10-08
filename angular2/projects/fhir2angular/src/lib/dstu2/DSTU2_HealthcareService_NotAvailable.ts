import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Period } from './DSTU2_Period'

export class DSTU2_HealthcareService_NotAvailable      extends DSTU2_BackboneElement
{

   static def : string = 'HealthcareService_NotAvailable';
   description : string ;
   during : DSTU2_Period ;
}

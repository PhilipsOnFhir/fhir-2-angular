import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_SupplyRequestStatusEnum } from './DSTU2_SupplyRequestStatusEnum'
import { DSTU2_SupplyRequest_When } from './DSTU2_SupplyRequest_When'

export class DSTU2_SupplyRequest      extends DSTU2_DomainResource
{

   static def : string = 'SupplyRequest';
   patient : DSTU2_Reference ;
   source : DSTU2_Reference ;
   date : string ;
   identifier : DSTU2_Identifier ;
   status : DSTU2_SupplyRequestStatusEnum ;
   kind : DSTU2_CodeableConcept ;
   orderedItem : DSTU2_Reference ;
   supplier : DSTU2_Reference [];
   reasonCodeableConcept : DSTU2_CodeableConcept ;
   reasonReference : DSTU2_Reference ;
   when : DSTU2_SupplyRequest_When ;
}

import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_InsurancePlan_Contact } from './R5_InsurancePlan_Contact'
import { R5_InsurancePlan_Coverage } from './R5_InsurancePlan_Coverage'
import { R5_InsurancePlan_Plan } from './R5_InsurancePlan_Plan'
import { R5_Period } from './R5_Period'
import { R5_PublicationStatusEnum } from './R5_PublicationStatusEnum'
import { R5_Reference } from './R5_Reference'

export class R5_InsurancePlan      extends R5_DomainResource
{

   static def : string = 'InsurancePlan';
   identifier : R5_Identifier [];
   status : R5_PublicationStatusEnum ;
   type : R5_CodeableConcept [];
   name : string ;
   alias : string [];
   period : R5_Period ;
   ownedBy : R5_Reference ;
   administeredBy : R5_Reference ;
   coverageArea : R5_Reference [];
   contact : R5_InsurancePlan_Contact [];
   endpoint : R5_Reference [];
   network : R5_Reference [];
   coverage : R5_InsurancePlan_Coverage [];
   plan : R5_InsurancePlan_Plan [];
}

import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_InsurancePlan_Contact } from './R4_InsurancePlan_Contact'
import { R4_InsurancePlan_Coverage } from './R4_InsurancePlan_Coverage'
import { R4_InsurancePlan_Plan } from './R4_InsurancePlan_Plan'
import { R4_Period } from './R4_Period'
import { R4_PublicationStatusEnum } from './R4_PublicationStatusEnum'
import { R4_Reference } from './R4_Reference'

export class R4_InsurancePlan      extends R4_DomainResource
{

   static def : string = 'InsurancePlan';
   identifier : R4_Identifier [];
   status : R4_PublicationStatusEnum ;
   type : R4_CodeableConcept [];
   name : string ;
   alias : string [];
   period : R4_Period ;
   ownedBy : R4_Reference ;
   administeredBy : R4_Reference ;
   coverageArea : R4_Reference [];
   contact : R4_InsurancePlan_Contact [];
   endpoint : R4_Reference [];
   network : R4_Reference [];
   coverage : R4_InsurancePlan_Coverage [];
   plan : R4_InsurancePlan_Plan [];
}

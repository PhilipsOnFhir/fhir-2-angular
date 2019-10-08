import { R4_1_Claim_Accident } from './R4_1_Claim_Accident'
import { R4_1_Claim_CareTeam } from './R4_1_Claim_CareTeam'
import { R4_1_Claim_Diagnosis } from './R4_1_Claim_Diagnosis'
import { R4_1_Claim_Insurance } from './R4_1_Claim_Insurance'
import { R4_1_Claim_Item } from './R4_1_Claim_Item'
import { R4_1_Claim_Payee } from './R4_1_Claim_Payee'
import { R4_1_Claim_Procedure } from './R4_1_Claim_Procedure'
import { R4_1_Claim_Related } from './R4_1_Claim_Related'
import { R4_1_Claim_SupportingInfo } from './R4_1_Claim_SupportingInfo'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_FinancialResourceStatusCodesEnum } from './R4_1_FinancialResourceStatusCodesEnum'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Money } from './R4_1_Money'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_UseEnum } from './R4_1_UseEnum'

export class R4_1_Claim      extends R4_1_DomainResource
{

   static def : string = 'Claim';
   identifier : R4_1_Identifier [];
   status : R4_1_FinancialResourceStatusCodesEnum ;
   type : R4_1_CodeableConcept ;
   subType : R4_1_CodeableConcept ;
   use : R4_1_UseEnum ;
   patient : R4_1_Reference ;
   billablePeriod : R4_1_Period ;
   created : string ;
   enterer : R4_1_Reference ;
   insurer : R4_1_Reference ;
   provider : R4_1_Reference ;
   priority : R4_1_CodeableConcept ;
   fundsReserve : R4_1_CodeableConcept ;
   related : R4_1_Claim_Related [];
   prescription : R4_1_Reference ;
   originalPrescription : R4_1_Reference ;
   payee : R4_1_Claim_Payee ;
   referral : R4_1_Reference ;
   facility : R4_1_Reference ;
   careTeam : R4_1_Claim_CareTeam [];
   supportingInfo : R4_1_Claim_SupportingInfo [];
   diagnosis : R4_1_Claim_Diagnosis [];
   procedure : R4_1_Claim_Procedure [];
   insurance : R4_1_Claim_Insurance [];
   accident : R4_1_Claim_Accident ;
   item : R4_1_Claim_Item [];
   total : R4_1_Money ;
}

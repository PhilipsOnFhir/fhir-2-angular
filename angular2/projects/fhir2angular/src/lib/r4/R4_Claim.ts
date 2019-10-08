import { R4_Claim_Accident } from './R4_Claim_Accident'
import { R4_Claim_CareTeam } from './R4_Claim_CareTeam'
import { R4_Claim_Diagnosis } from './R4_Claim_Diagnosis'
import { R4_Claim_Insurance } from './R4_Claim_Insurance'
import { R4_Claim_Item } from './R4_Claim_Item'
import { R4_Claim_Payee } from './R4_Claim_Payee'
import { R4_Claim_Procedure } from './R4_Claim_Procedure'
import { R4_Claim_Related } from './R4_Claim_Related'
import { R4_Claim_SupportingInfo } from './R4_Claim_SupportingInfo'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_FinancialResourceStatusCodesEnum } from './R4_FinancialResourceStatusCodesEnum'
import { R4_Identifier } from './R4_Identifier'
import { R4_Money } from './R4_Money'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'
import { R4_UseEnum } from './R4_UseEnum'

export class R4_Claim      extends R4_DomainResource
{

   static def : string = 'Claim';
   identifier : R4_Identifier [];
   status : R4_FinancialResourceStatusCodesEnum ;
   type : R4_CodeableConcept ;
   subType : R4_CodeableConcept ;
   use : R4_UseEnum ;
   patient : R4_Reference ;
   billablePeriod : R4_Period ;
   created : string ;
   enterer : R4_Reference ;
   insurer : R4_Reference ;
   provider : R4_Reference ;
   priority : R4_CodeableConcept ;
   fundsReserve : R4_CodeableConcept ;
   related : R4_Claim_Related [];
   prescription : R4_Reference ;
   originalPrescription : R4_Reference ;
   payee : R4_Claim_Payee ;
   referral : R4_Reference ;
   facility : R4_Reference ;
   careTeam : R4_Claim_CareTeam [];
   supportingInfo : R4_Claim_SupportingInfo [];
   diagnosis : R4_Claim_Diagnosis [];
   procedure : R4_Claim_Procedure [];
   insurance : R4_Claim_Insurance [];
   accident : R4_Claim_Accident ;
   item : R4_Claim_Item [];
   total : R4_Money ;
}

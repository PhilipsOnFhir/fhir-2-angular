import { R5_Claim_Accident } from './R5_Claim_Accident'
import { R5_Claim_CareTeam } from './R5_Claim_CareTeam'
import { R5_Claim_Diagnosis } from './R5_Claim_Diagnosis'
import { R5_Claim_Insurance } from './R5_Claim_Insurance'
import { R5_Claim_Item } from './R5_Claim_Item'
import { R5_Claim_Payee } from './R5_Claim_Payee'
import { R5_Claim_Procedure } from './R5_Claim_Procedure'
import { R5_Claim_Related } from './R5_Claim_Related'
import { R5_Claim_SupportingInfo } from './R5_Claim_SupportingInfo'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_FinancialResourceStatusCodesEnum } from './R5_FinancialResourceStatusCodesEnum'
import { R5_Identifier } from './R5_Identifier'
import { R5_Money } from './R5_Money'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'
import { R5_UseEnum } from './R5_UseEnum'

export class R5_Claim      extends R5_DomainResource
{

   static def : string = 'Claim';
   identifier : R5_Identifier [];
   status : R5_FinancialResourceStatusCodesEnum ;
   type : R5_CodeableConcept ;
   subType : R5_CodeableConcept ;
   use : R5_UseEnum ;
   patient : R5_Reference ;
   billablePeriod : R5_Period ;
   created : string ;
   enterer : R5_Reference ;
   insurer : R5_Reference ;
   provider : R5_Reference ;
   priority : R5_CodeableConcept ;
   fundsReserve : R5_CodeableConcept ;
   related : R5_Claim_Related [];
   prescription : R5_Reference ;
   originalPrescription : R5_Reference ;
   payee : R5_Claim_Payee ;
   referral : R5_Reference ;
   facility : R5_Reference ;
   careTeam : R5_Claim_CareTeam [];
   supportingInfo : R5_Claim_SupportingInfo [];
   diagnosis : R5_Claim_Diagnosis [];
   procedure : R5_Claim_Procedure [];
   insurance : R5_Claim_Insurance [];
   accident : R5_Claim_Accident ;
   item : R5_Claim_Item [];
   total : R5_Money ;
}

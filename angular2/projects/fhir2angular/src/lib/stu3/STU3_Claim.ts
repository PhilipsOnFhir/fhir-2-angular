import { STU3_Claim_Accident } from './STU3_Claim_Accident'
import { STU3_Claim_CareTeam } from './STU3_Claim_CareTeam'
import { STU3_Claim_Diagnosis } from './STU3_Claim_Diagnosis'
import { STU3_Claim_Information } from './STU3_Claim_Information'
import { STU3_Claim_Insurance } from './STU3_Claim_Insurance'
import { STU3_Claim_Item } from './STU3_Claim_Item'
import { STU3_Claim_Payee } from './STU3_Claim_Payee'
import { STU3_Claim_Procedure } from './STU3_Claim_Procedure'
import { STU3_Claim_Related } from './STU3_Claim_Related'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_FinancialResourceStatusCodesEnum } from './STU3_FinancialResourceStatusCodesEnum'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'
import { STU3_UseEnum } from './STU3_UseEnum'

export class STU3_Claim      extends STU3_DomainResource
{

   static def : string = 'Claim';
   identifier : STU3_Identifier [];
   status : STU3_FinancialResourceStatusCodesEnum ;
   type : STU3_CodeableConcept ;
   subType : STU3_CodeableConcept [];
   use : STU3_UseEnum ;
   patient : STU3_Reference ;
   billablePeriod : STU3_Period ;
   created : string ;
   enterer : STU3_Reference ;
   insurer : STU3_Reference ;
   provider : STU3_Reference ;
   organization : STU3_Reference ;
   priority : STU3_CodeableConcept ;
   fundsReserve : STU3_CodeableConcept ;
   related : STU3_Claim_Related [];
   prescription : STU3_Reference ;
   originalPrescription : STU3_Reference ;
   payee : STU3_Claim_Payee ;
   referral : STU3_Reference ;
   facility : STU3_Reference ;
   careTeam : STU3_Claim_CareTeam [];
   information : STU3_Claim_Information [];
   diagnosis : STU3_Claim_Diagnosis [];
   procedure : STU3_Claim_Procedure [];
   insurance : STU3_Claim_Insurance [];
   accident : STU3_Claim_Accident ;
   employmentImpacted : STU3_Period ;
   hospitalization : STU3_Period ;
   item : STU3_Claim_Item [];
   total : string ;
}

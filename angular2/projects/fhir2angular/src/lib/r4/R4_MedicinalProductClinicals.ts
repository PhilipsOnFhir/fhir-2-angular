import { R4_DomainResource } from './R4_DomainResource'
import { R4_MedicinalProductClinicals_Contraindication } from './R4_MedicinalProductClinicals_Contraindication'
import { R4_MedicinalProductClinicals_Interactions } from './R4_MedicinalProductClinicals_Interactions'
import { R4_MedicinalProductClinicals_TherapeuticIndication } from './R4_MedicinalProductClinicals_TherapeuticIndication'
import { R4_MedicinalProductClinicals_UndesirableEffects } from './R4_MedicinalProductClinicals_UndesirableEffects'

export class R4_MedicinalProductClinicals      extends R4_DomainResource
{

   static def : string = 'MedicinalProductClinicals';
   undesirableEffects : R4_MedicinalProductClinicals_UndesirableEffects [];
   therapeuticIndication : R4_MedicinalProductClinicals_TherapeuticIndication [];
   contraindication : R4_MedicinalProductClinicals_Contraindication [];
   interactions : R4_MedicinalProductClinicals_Interactions [];
}
